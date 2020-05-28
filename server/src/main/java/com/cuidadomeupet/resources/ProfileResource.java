package com.cuidadomeupet.resources;

import java.util.List;

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
import com.cuidadomeupet.model.Pet;
import com.cuidadomeupet.model.Profile;
import com.cuidadomeupet.model.User;
import com.cuidadomeupet.services.PetServiceDefault;
import com.cuidadomeupet.services.UserService;
import org.eclipse.microprofile.jwt.JsonWebToken;

@RequestScoped
@Path("profile")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProfileResource {
    
    @Inject
    UserService userService;

    @Inject
    PetServiceDefault petService;

    @Inject
    JsonWebToken jwt;

    @GET
    @RolesAllowed({"user"})
    public Response getCurrent() throws Exception {

        Integer id = Integer.parseInt(jwt.getSubject());

        Entity entity = new Entity();
        entity.setId(id);
        entity.setRevision(0);

        User user = userService.getUser(entity);
        List<Pet> pets = petService.getPet(user);

        Profile profile = new Profile();

        profile.setUser(user);
        profile.setPets(pets);

        return Response.status(Status.OK).entity(profile).build();
    }

    @POST
    @RolesAllowed({"user"})
    public Response updateUser(User user) throws Exception {

        Integer id = Integer.parseInt(jwt.getSubject());

        User current = userService.getUser(new Entity(id, 0));

        current.setName(user.getName());
        current.setDescription(user.getDescription());

        if (user.getPassword() != null && !user.getPassword().isEmpty()) {
            current.setPassword(user.getPassword());
        }

        userService.updateUser(user);

        return Response.status(Status.OK).entity(user).build();
    }
}