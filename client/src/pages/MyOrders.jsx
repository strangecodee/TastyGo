import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import '../pages/MyOrders.css'; // Ensure this contains necessary styles
import { assets } from '../assets/assets';

const MyOrders = () => {
    const { token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/orders", {
                headers: { 'Authorization': `Bearer ${token}` },
            });
            console.log("API Response:", response.data);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
            setData([]); // Fallback to empty array on error
        }
    };

    return (
        <div className="container">
            <div className="py-4 row justify-content-center">
                <div className="col-11 card shadow-sm p-3">
                    <table className="table table-hover">
                        <tbody>
                            {data.length > 0 ? (
                                data.map((order, index) => (
                                    <tr key={index} className="align-middle">
                                        <td>
                                            <img src={assets.delivery} alt="Delivery Icon" height={48} width={48} />
                                        </td>
                                        <td className="fw-semibold">
                                            {order.orderedItems && order.orderedItems.length > 0 ? (
                                                order.orderedItems.map((item, idx) =>
                                                    <span key={idx}>{item.name} x {item.quantity}{idx !== order.orderedItems.length - 1 ? ', ' : ''}</span>
                                                )
                                            ) : (
                                                <span className="text-danger">No items found!</span>
                                            )}
                                        </td>

                                        <td className="text-primary fw-bold">&#x20B9;{order.amount}</td>
                                        <td>Items: {order.orderedItems?.length || 0}</td>
                                        <td className={`fw-bold text-capitalize ${order.orderStatus === 'Preparing' ? 'text-warning' : 'text-success'}`}>
                                            &#x25cf; {order.orderStatus}
                                        </td>
                                        <td>
                                            <button className="btn btn-warning btn-sm" onClick={fetchOrders}>
                                                🔄
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center text-muted">No orders found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
