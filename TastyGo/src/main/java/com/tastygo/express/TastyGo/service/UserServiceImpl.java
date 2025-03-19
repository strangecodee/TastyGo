package com.tastygo.express.TastyGo.service;

import com.tastygo.express.TastyGo.entity.UserEntity;
import com.tastygo.express.TastyGo.io.UserRequest;
import com.tastygo.express.TastyGo.io.UserResponse;
import com.tastygo.express.TastyGo.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationWindow authenticationWindow;

    @Override
    public UserResponse registerUser(UserRequest request) {
        UserEntity newUser =convertToEntity(request);
        newUser= userRepository.save(newUser);
       return convertToResponse(newUser);

    }

    @Override
    public String findByUserId() {
        String loggedInUserEmail =  authenticationWindow.getAuthentication().getName();
        UserEntity loggedInUser = userRepository.findByEmail(loggedInUserEmail).orElseThrow(()->new UsernameNotFoundException("User not found"));
        return loggedInUser.getId();
    }

    private UserEntity convertToEntity(UserRequest request) {
        return UserEntity.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .name(request.getName())
                .build();
    }

    private UserResponse convertToResponse(UserEntity registeredUser) {
       return UserResponse.builder()
                .id(registeredUser.getId())
                .email(registeredUser.getEmail())
                .name(registeredUser.getName())
                .build();

    }
}
