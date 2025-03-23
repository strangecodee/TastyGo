package com.tastygo.express.TastyGo.service;

import com.razorpay.RazorpayException;
import com.tastygo.express.TastyGo.io.OrderRequest;
import com.tastygo.express.TastyGo.io.OrderResponse;

import java.util.List;
import java.util.Map;


public interface OrderService {
    OrderResponse createOrderWithPayment(OrderRequest request) throws RazorpayException;

    void verifyPayment(Map<String, String> paymentData, String status);
    List<OrderResponse> getUserOrders();
    void deleteOrder(String orderId);
    List<OrderResponse> getAllOrders();
    void updateOrderStatus(String orderId, String status);

}
