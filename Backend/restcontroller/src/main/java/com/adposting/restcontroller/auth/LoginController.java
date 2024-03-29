package com.adposting.restcontroller.auth;

import com.adposting.restcontroller.entity.AuthResponse;
import com.adposting.restcontroller.entity.User;
import com.adposting.restcontroller.entity.UserCredentials;
import com.adposting.restcontroller.entity.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody UserCredentials credentials) {
        Optional<User> userOptional = userRepository.findByUsername(credentials.getUsername());

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            // Verify the password (you should use a password hashing library)
            if (user.getPassword().equals(credentials.getPassword())) {
                // Authentication succeeded; generate and return a JWT token
                String token = jwtUtil.createToken(credentials.getUsername());

                // Build the authentication response
                AuthResponse response = new AuthResponse();
                response.setSuccess(true);
                response.setMessage("Authentication successful");
                response.setToken(token);
                response.setUser(user);

                return ResponseEntity.ok(response);
            }
        }

        // Authentication failed
        AuthResponse response = new AuthResponse();
        response.setSuccess(false);
        response.setMessage("Authentication failed");

        return ResponseEntity.ok().body(response);
    }

    private boolean authenticateUser(String username, String password) {
        // Implement your authentication logic here (e.g., check against a user database)
        // Return true if authentication succeeds, otherwise false
        // This is a simplified example; in a real application, use secure authentication mechanisms
        Optional<User> userOptional = userRepository.findByUsername(username);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(password)) {
                return true; // Authentication successful
            }
        }

        return false; // Authentication failed
    }
}
