package com.adposting.restcontroller.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {

    // Secret key used for signing and verifying JWTs
    private static final String SECRET_KEY = "secretirgf0querg8argijsgfjsi8grigsoieiogjsiifbsoihfbsifhbibhsoihbsjifbosi";

    // JWT expiration time in milliseconds (e.g., 10 hour)
    private static final long EXPIRATION_TIME = 36000000;

    public static String createToken(String subject) {
        // Create JWT claims
        Map<String, Object> claims = new HashMap<>();
        claims.put("sub", subject);
        claims.put("iat", new Date().getTime()); // Issued at time

        // Build the JWT
        return Jwts.builder()
                .setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    public static Claims parseToken(String token) {
        // Parse the token and verify its signature
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
    }

    public static boolean isTokenValid(String token) {
        try {
            // Check if the token is valid (no exceptions are thrown)
            parseToken(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}

