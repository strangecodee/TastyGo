package com.tastygo.express.TastyGo.contoller;

import com.tastygo.express.TastyGo.io.CartRequest;
import com.tastygo.express.TastyGo.io.CartResponse;
import com.tastygo.express.TastyGo.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
@RequestMapping("/api/cart")
public class CartController
{
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    public CartResponse addToCart(@RequestBody CartRequest request){
        String foodId = request.getFoodId();
        if(foodId == null|| foodId.isEmpty()){
            throw
        new ResponseStatusException(HttpStatus.BAD_REQUEST,"FoodId is not found");
        }
        cartService.addToCart(request);
        return cartService.addToCart(request);
    }

}
