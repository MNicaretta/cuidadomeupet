package com.cuidadomeupet.resources;

import java.util.List;

import javax.enterprise.context.RequestScoped;
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

import com.cuidadomeupet.models.User;

@RequestScoped
@Path("users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    // @Inject
    // UserService service;

    @POST
    public Response addUser(User user) throws Exception {

        // service.addUser(user);

        return Response.status(Status.OK).entity(user).build();
    }

    @PUT
    @Path("{id}/{revision}")
    public Response updateUser(@PathParam("id") Integer id, @PathParam("revision") Integer revision, User user) throws Exception {

        // user.setId(id);
        // user.setRevision(revision);

        // service.updateUser(user);

        return Response.status(Status.OK).entity(user).build();
    }

    @DELETE
    @Path("{id}/{revision}")
    public Response deleteUser(@PathParam("id") Integer id, @PathParam("revision") Integer revision) throws Exception {

        // Entity entity = new Entity();
        // entity.setId(id);
        // entity.setRevision(revision);

        User user = null;// service.getUser(entity);

        // service.deleteUser(user);

        return Response.status(Status.OK).entity(user).build();
    }

    @GET
    @Path("{id}/{revision}")
    public Response getUser(@PathParam("id") Integer id, @PathParam("revision") Integer revision) throws Exception {

        // Entity entity = new Entity();
        // entity.setId(id);
        // entity.setRevision(revision);

        User user = null; //service.getUser(entity);

        return Response.status(Status.OK).entity(user).build();
    }

    @GET
    public Response getUsers() throws Exception {

        List<User> users = null; //service.getUsers();

        return Response.status(Status.OK).entity(users).build();
    }
}