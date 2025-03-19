package com.tastygo.express.TastyGo.service;

import com.tastygo.express.TastyGo.io.UserRequest;
import com.tastygo.express.TastyGo.io.UserResponse;

public interface UserService
{
    UserResponse registerUser(UserRequest request);

    String findByUserId();
}
