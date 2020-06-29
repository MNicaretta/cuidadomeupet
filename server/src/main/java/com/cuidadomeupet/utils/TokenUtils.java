package com.cuidadomeupet.utils;

import java.io.InputStream;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;

import com.cuidadomeupet.models.User;

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

		String privateKeyLocation = "/META-INF/resources/privatekey.pem";
        JwtClaimsBuilder claims = getClaims(user);
        PrivateKey privateKey = readPrivateKey(privateKeyLocation);

        return claims.jws().signatureKeyId(privateKeyLocation).sign(privateKey);
    }

    private static JwtClaimsBuilder getClaims(User user) {

        long currentTimeInSecs = currentTimeInSecs();
        long exp = currentTimeInSecs + 1800;

        return Jwt.claims()
                  .issuer("http://cuidadomeupet.com/")
                  .subject(String.valueOf(user.id))
                  .upn(user.email)
                  .preferredUserName(user.name)
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

    private static PrivateKey readPrivateKey(final String pemResName) throws Exception {
        try (InputStream contentIS = TokenUtils.class.getResourceAsStream(pemResName)) {
            byte[] tmp = new byte[4096];
            int length = contentIS.read(tmp);
            return decodePrivateKey(new String(tmp, 0, length, "UTF-8"));
        }
    }
    
    private static PrivateKey decodePrivateKey(final String pemEncoded) throws Exception {
        byte[] encodedBytes = toEncodedBytes(pemEncoded);

        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(encodedBytes);
        KeyFactory kf = KeyFactory.getInstance("RSA");
        return kf.generatePrivate(keySpec);
    }

    private static byte[] toEncodedBytes(final String pemEncoded) {
        final String normalizedPem = removeBeginEnd(pemEncoded);
        return Base64.getDecoder().decode(normalizedPem);
    }
    
    private static String removeBeginEnd(String pem) {
        pem = pem.replaceAll("-----BEGIN (.*)-----", "");
        pem = pem.replaceAll("-----END (.*)----", "");
        pem = pem.replaceAll("\r\n", "");
        pem = pem.replaceAll("\n", "");
        return pem.trim();
    }
}
