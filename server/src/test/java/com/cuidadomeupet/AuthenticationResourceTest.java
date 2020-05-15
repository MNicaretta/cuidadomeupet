package com.cuidadomeupet;

import static io.restassured.RestAssured.given;

import com.cuidadomeupet.model.SigninRequest;

import org.junit.jupiter.api.Test;

import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class AuthenticationResourceTest {

    @Test
    public void testLoginSuccess() {

        SigninRequest request = new SigninRequest();
        request.setEmail("marcelo@cuidadomeupet.com");
        request.setPassword("admin123");

        given()
            .contentType("application/json")
            .body(request)
        .when()
            .post("/api/auth/signin")
        .then()
            .statusCode(200);
    }

    @Test
    public void testLoginFail() {

        SigninRequest request = new SigninRequest();
        request.setEmail("marcelo@cuidadomeupet.com");
        request.setPassword("admin");

        given()
            .contentType("application/json")
            .body(request)
        .when()
            .post("/api/auth/signin")
        .then()
            .statusCode(401);
    }

}