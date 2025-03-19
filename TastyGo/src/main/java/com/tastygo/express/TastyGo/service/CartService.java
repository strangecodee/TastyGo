package com.tastygo.express.TastyGo.service;

import com.tastygo.express.TastyGo.entity.CartEntity;
import com.tastygo.express.TastyGo.io.CartRequest;
import com.tastygo.express.TastyGo.io.CartResponse;

public interface CartService {
    CartResponse addToCart(CartRequest request);
    CartResponse getCart();
}
