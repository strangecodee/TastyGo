import React, { useEffect, useState } from "react";
import axios from "axios";
import { assets } from "../../assets/assets";
import "./Orders.css";

const Orders = () => {
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/orders/all");
      console.log(response.data); // Log the response data
      setData(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const updateStatus = async (event, orderId) => {
    const status = event.target.value; // Get the selected status
    try {
      const response = await axios.patch(`http://localhost:8080/api/orders/status/${orderId}?status=${status}`);
      if (response.status === 200) {
        await fetchOrders(); // Refresh the orders after updating
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
      <div className="orders-container">
        <div className="row justify-content-center">
          <div className="col-11 orders-card">
            <table className="orders-table">
            <tbody>
              {data.length > 0 ? (
                data.map((order, index) => (
                  <tr key={index} className="align-middle">
                    <td>
                      <img src={assets.parcel} alt="Delivery Icon" height={48} width={48} />
                    </td>
                    <td className="fw-semibold">
                      <div>
                        {order.orderedItems && order.orderedItems.length > 0 ? (
                          order.orderedItems.map((item, idx) => (
                            <span key={idx}>
                              {item.name} x {item.quantity}
                              {idx !== order.orderedItems.length - 1 ? ', ' : ''}
                            </span>
                          ))
                        ) : (
                          <span className="text-danger">No items found!</span>
                        )}
                      </div>
                    </td>
                    <td>{order.userAddress}</td>
                    <td className="text-primary fw-bold">&#x20B9;{order.amount}</td>
                    <td>Items: {order.orderedItems?.length || 0}</td>
                    <td>
                      <select
                        className="form-control"
                        onChange={(event) => updateStatus(event, order.id)} // Pass the event and order ID
                        value={order.orderStatus}
                      >
                        <option value="Food Preparing">Food Preparing</option>
                        <option value="Out for delivery">Out for delivery</option>
                        <option value="Delivered">Delivered</option>
                      </select>
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

export default Orders;