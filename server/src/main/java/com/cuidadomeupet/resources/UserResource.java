package com.cuidadomeupet.resources;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.cuidadomeupet.model.data.Entity;
import com.cuidadomeupet.model.data.User;
import com.cuidadomeupet.model.db.services.UserService;
import com.google.gson.Gson;

@ApplicationScoped
@Path("users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    private Gson gson = new Gson();

    @POST
    public Response addUser(String json) throws Exception {

        User user = gson.fromJson(json, User.class);

        UserService.getInstance().addUser(user);

        return Response.status(200).entity(gson.toJson(user)).build();
    }

    @PUT
    @Path("{id}/{revision}")
    public Response updateUser(@PathParam("id") Integer id, @PathParam("revision") Integer revision, String json) throws Exception {

        User user = gson.fromJson(json, User.class);

        user.setId(id);
        user.setRevision(revision);

        UserService.getInstance().updateUser(user);

        return Response.status(200).entity(gson.toJson(user)).build();
    }

    @DELETE
    @Path("{id}/{revision}")
    public Response deleteUser(@PathParam("id") Integer id, @PathParam("revision") Integer revision) throws Exception {

        Entity entity = new Entity();
        entity.setId(id);
        entity.setRevision(revision);

        User user = UserService.getInstance().getUser(entity);

        UserService.getInstance().deleteUser(user);

        return Response.status(200).entity(gson.toJson(user)).build();
    }

    @GET
    @Path("{id}/{revision}")
    public Response getUser(@PathParam("id") Integer id, @PathParam("revision") Integer revision) throws Exception {

        Entity entity = new Entity();
        entity.setId(id);
        entity.setRevision(revision);

        User user = UserService.getInstance().getUser(entity);

        return Response.status(200).entity(gson.toJson(user)).build();
    }

    @GET
    public Response getUsers() throws Exception {

        List<User> users = UserService.getInstance().getUsers();

        return Response.status(Status.OK).entity(gson.toJson(users)).build();
    }
}