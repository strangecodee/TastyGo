package com.tastygo.express.TastyGo.io;

import lombok.Data;

@Data
public class AdminLoginRequest {
    private String email;
    private String password;
}
