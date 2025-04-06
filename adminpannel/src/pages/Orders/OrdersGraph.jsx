import React, { useEffect, useState } from "react";
import axios from "axios";
import './OrdersGraph.css';

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const OrdersGraph = () => {
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/orders/all");
            const orders = response.data;

            const categoryTotals = {};

            orders.forEach(order => {
                const totalItems = order.orderedItems || [];

                totalItems.forEach(item => {
                    const category = item.category || "Unknown";
                    const amount = (item.price || 0) * (item.quantity || 1);

                    if (categoryTotals[category]) {
                        categoryTotals[category] += amount;
                    } else {
                        categoryTotals[category] = amount;
                    }
                });
            });

            const chartData = Object.entries(categoryTotals).map(([category, amount]) => ({
                category,
                amount,
            }));

            setData(chartData);
        } catch (error) {
            console.error("Error fetching order stats:", error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="orders-graph-container">
            <h3 className="orders-graph-title">Total Order Amount by Category</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip formatter={(value) => `₹${value}`} />
                    <Legend />
                    <Bar dataKey="amount" fill="#6366f1" name="Amount (₹)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

};

export default OrdersGraph;
