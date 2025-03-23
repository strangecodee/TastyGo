package com.tastygo.express.TastyGo.contoller;

import com.tastygo.express.TastyGo.io.CartRequest;
import com.tastygo.express.TastyGo.io.CartResponse;
import com.tastygo.express.TastyGo.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
    @PostMapping
    public CartResponse addToCart(@RequestBody CartRequest request){
        String foodId = request.getFoodId();
        if(foodId == null|| foodId.isEmpty()){
            throw
        new ResponseStatusException(HttpStatus.BAD_REQUEST,"FoodId is not found");
        }
        return cartService.addToCart(request);
    }

    @GetMapping
    public CartResponse getCart(){
        return cartService.getCart();
    }
    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void clearCart(){
        cartService.clearCart();
    }

    @PostMapping("/remove")
    public CartResponse removeFromCart(@RequestBody CartRequest request) {
        String foodId = request.getFoodId();
        if (foodId == null || foodId.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "foodId not found");
        }
        return cartService.removeFromCart(request);
    }


}
