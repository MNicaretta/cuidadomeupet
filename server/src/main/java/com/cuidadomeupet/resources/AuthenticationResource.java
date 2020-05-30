package com.cuidadomeupet.resources;

import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.cuidadomeupet.models.SigninRequest;
import com.cuidadomeupet.models.SigninResponse;
import com.cuidadomeupet.models.User;
import com.cuidadomeupet.models.UserValidationRequest;
import com.cuidadomeupet.models.UserValidationResponse;
import com.cuidadomeupet.utils.BcryptUtil;
import com.cuidadomeupet.utils.TokenUtils;

@Path("auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AuthenticationResource {

    @POST
    @Path("signup")
    @Transactional
    public Response signup(@Valid User user) throws Exception {

        user.password = BcryptUtil.bcryptHash(user.password);
        user.persist();

        String token = TokenUtils.generateTokenString(user);

        SigninResponse response = new SigninResponse();
        response.user = user;
        response.token = token;

        return Response.status(Status.OK).entity(response).build();
    }

    @POST
    @Path("signin")
    public Response signin(SigninRequest request) throws Exception {

        User user = User.findByEmail(request.email);

        if (user == null) {
            return Response.status(Status.UNAUTHORIZED).build();
        }

        if (!BcryptUtil.verify(user.password, request.password)) {
            return Response.status(Status.UNAUTHORIZED).build();
        }

        String token = TokenUtils.generateTokenString(user);

        SigninResponse response = new SigninResponse();
        response.user = user;
        response.token = token;

        return Response.status(Status.OK).entity(response).build();
    }

    @POST
    @Path("validate")
    public Response validate(UserValidationRequest request) throws Exception {

        User user = User.findByEmail(request.email);

        return Response.status(Status.OK).entity(new UserValidationResponse(user == null)).build();
    }
}