package com.cuidadomeupet.resources;

import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.cuidadomeupet.model.Entity;
import com.cuidadomeupet.model.User;
import com.cuidadomeupet.services.UserService;

import org.eclipse.microprofile.jwt.JsonWebToken;

@RequestScoped
@Path("profile")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProfileResource {
    
    @Inject
    UserService service;

    @Inject
    JsonWebToken jwt;

    @GET
    @RolesAllowed({"user"})
    public Response getCurrent() throws Exception {

        Integer id = Integer.parseInt(jwt.getSubject());

        Entity entity = new Entity();
        entity.setId(id);
        entity.setRevision(0);

        User user = service.getUser(entity);

        return Response.status(Status.OK).entity(user).build();
    }

    @POST
    @RolesAllowed({"user"})
    public Response updateUser(User user) throws Exception {

        Integer id = Integer.parseInt(jwt.getSubject());

        User current = service.getUser(new Entity(id, 0));

        current.setName(user.getName());
        current.setDescription(user.getDescription());

        if (user.getPassword() != null && !user.getPassword().isEmpty()) {
            current.setPassword(user.getPassword());
        }

        service.updateUser(user);

        return Response.status(Status.OK).entity(user).build();
    }
}