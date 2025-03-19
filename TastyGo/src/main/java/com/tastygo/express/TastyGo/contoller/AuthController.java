package com.tastygo.express.TastyGo.contoller;

import com.tastygo.express.TastyGo.config.JwtUtil;
import com.tastygo.express.TastyGo.io.AuthenticationRequest;
import com.tastygo.express.TastyGo.io.AuthenticationResponse;
import com.tastygo.express.TastyGo.service.AppUserDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.AuthProvider;
@AllArgsConstructor
@RestController
@RequestMapping("/api")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final AppUserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;


    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody AuthenticationRequest request) {
    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
    final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
    final String jwtToken = jwtUtil.generateToken(userDetails);
    return new AuthenticationResponse(jwtToken,request.getEmail());
    }
}
