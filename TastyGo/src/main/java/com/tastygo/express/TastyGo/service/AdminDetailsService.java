package com.tastygo.express.TastyGo.service;

import com.tastygo.express.TastyGo.entity.Admin;
import com.tastygo.express.TastyGo.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.util.Collections;
@Service
@RequiredArgsConstructor
    public class AdminDetailsService implements UserDetailsService {

        private final AdminRepository adminRepository;

        @Override
        public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
            Admin admin = adminRepository.findByEmail(email)
                    .orElseThrow(() -> new UsernameNotFoundException("Admin not found with email: " + email));

            return new User(admin.getEmail(), admin.getPassword(), Collections.emptyList());
        }
    }
