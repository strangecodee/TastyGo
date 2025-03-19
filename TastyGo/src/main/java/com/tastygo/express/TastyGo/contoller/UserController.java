package com.tastygo.express.TastyGo.contoller;

import com.tastygo.express.TastyGo.entity.UserEntity;
import com.tastygo.express.TastyGo.io.UserRequest;
import com.tastygo.express.TastyGo.io.UserResponse;
import com.tastygo.express.TastyGo.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class UserController
{
    private final UserService userService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse register(@RequestBody UserRequest request) {
        return userService.registerUser(request);
    }
}
