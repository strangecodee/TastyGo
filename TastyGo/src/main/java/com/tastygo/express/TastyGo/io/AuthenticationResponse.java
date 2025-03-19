package com.tastygo.express.TastyGo.io;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AuthenticationResponse
{
    private String token;
    private String email;
}
