package com.cuidadomeupet.resources;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.cuidadomeupet.model.SigninRequest;
import com.cuidadomeupet.model.SigninResponse;
import com.cuidadomeupet.model.User;
import com.cuidadomeupet.services.AuthenticationService;
import com.cuidadomeupet.utils.TokenUtils;

@RequestScoped
@Path("auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AuthenticationResource {

    @Inject
    AuthenticationService authenticationService;

    @POST
    @Path("signup")
    public Response signup(User user) throws Exception {

        authenticationService.signup(user);

        String token = TokenUtils.generateTokenString(user);

        SigninResponse response = new SigninResponse();
        response.setUser(user);
        response.setToken(token);

        return Response.status(Response.Status.OK).entity(response).build();
    }

    @POST
    @Path("signin")
    public Response signin(SigninRequest request) throws Exception {

        User user = authenticationService.signin(request);

        if (user == null) {
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }

        String token = TokenUtils.generateTokenString(user);

        SigninResponse response = new SigninResponse();
        response.setUser(user);
        response.setToken(token);

        return Response.status(Response.Status.OK).entity(response).build();
    }
}