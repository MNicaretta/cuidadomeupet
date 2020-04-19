package com.cuidadomeupet.utils;

import com.cuidadomeupet.model.User;

import org.eclipse.microprofile.jwt.Claims;

import io.smallrye.jwt.build.Jwt;
import io.smallrye.jwt.build.JwtClaimsBuilder;
/**
 * Utilities for generating a JWT for testing
 */
public class TokenUtils {

    private TokenUtils() {
    }

    public static String generateTokenString(User user) throws Exception {

        JwtClaimsBuilder claims = getClaims(user);

        return claims.jwe().encrypt("META-INF/resources/publicKey.pem");
    }

    private static JwtClaimsBuilder getClaims(User user) {

        long currentTimeInSecs = currentTimeInSecs();
        long exp = currentTimeInSecs + 300;

        return Jwt.claims()
                  .issuer("http://cuidadomeupet.com/")
                  .subject(String.valueOf(user.getId()))
                  .upn(user.getEmail())
                  .preferredUserName(user.getName())
                  .audience("authentication")
                  .groups("user")
                  .issuedAt(currentTimeInSecs)
                  .claim(Claims.auth_time.name(), currentTimeInSecs)
                  .expiresAt(exp);
	}

    private static int currentTimeInSecs() {
        long currentTimeMS = System.currentTimeMillis();
        return (int) (currentTimeMS / 1000);
    }
}
