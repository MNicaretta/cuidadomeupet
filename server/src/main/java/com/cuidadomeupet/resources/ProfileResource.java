package com.cuidadomeupet.resources;

import java.util.List;

import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.cuidadomeupet.models.Pet;
import com.cuidadomeupet.models.Profile;
import com.cuidadomeupet.models.User;

import org.eclipse.microprofile.jwt.JsonWebToken;

@RequestScoped
@Path("profile")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProfileResource {
    
    @Inject
    JsonWebToken jwt;

    @GET
    @RolesAllowed({"user"})
    public Response getCurrent() throws Exception {

        Long id = Long.parseLong(jwt.getSubject());

        User user = User.findById(id);
        List<Pet> pets = Pet.findByUser(user);

        Profile profile = new Profile();

        profile.user = user;
        profile.pets = pets;

        return Response.status(Status.OK).entity(profile).build();
    }

    @POST
    @RolesAllowed({"user"})
    @Transactional
    public Response updateCurrent(User user) throws Exception {

        Long id = Long.parseLong(jwt.getSubject());

        User current = User.findById(id);

        current.name = user.name;
        current.description = user.description;

        if (user.password != null && !user.password.isEmpty()) {
            current.password = user.password;
        }

        return Response.status(Status.OK).entity(current).build();
    }
}