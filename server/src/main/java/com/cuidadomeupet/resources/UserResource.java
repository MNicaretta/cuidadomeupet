package com.cuidadomeupet.resources;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.cuidadomeupet.model.data.User;
import com.cuidadomeupet.model.db.services.UserService;
import com.google.gson.Gson;

@ApplicationScoped
@Path("/api/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    private Gson gson = new Gson();

    @POST
    public Response addUser(String json) {
        User user = gson.fromJson(json, User.class);

        try {
            UserService.getInstance().addUser(user);
        } catch ( Exception e ) {
            e.printStackTrace();
        }

        return Response.status(200).entity(gson.toJson(user)).build();
    }

    @GET
    public Response getUsers() {
        List<User> users = UserService.getInstance().getUsers();

        return Response.status(Status.OK).entity(gson.toJson(users)).build();
    }
}