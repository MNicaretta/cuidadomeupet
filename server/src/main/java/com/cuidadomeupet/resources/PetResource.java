package com.cuidadomeupet.resources;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.transaction.Transactional;
import javax.validation.Valid;
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

import com.cuidadomeupet.models.Pet;
import com.cuidadomeupet.models.User;

@RequestScoped
@Path("pets")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PetResource {

    @POST
    @Transactional
    public Response addPet(@Valid Pet pet) throws Exception {

        pet.setUser(User.findById(pet.userId));
        pet.persist();

        return Response.status(Status.OK).entity(pet).build();
    }

    @PUT
    @Path("{id}")
    @Transactional
    public Response updatePet(@PathParam("id") Long id, @Valid Pet input) throws Exception {

        Pet pet = Pet.findById(id);
        pet.name = input.name;
        pet.additionalInfo = input.additionalInfo;

        return Response.status(Status.OK).entity(pet).build();
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public Response deletePet(@PathParam("id") Long id) throws Exception {

        Pet pet = Pet.findById(id);

        pet.delete();

        return Response.status(Status.OK).entity(pet).build();
    }

    @GET
    @Path("{id}")
    public Response getPet(@PathParam("id") Long id) throws Exception {

        Pet pet = Pet.findById(id);

        return Response.status(Status.OK).entity(pet).build();
    }

    @GET
    public Response getPets() throws Exception {

        List<Pet> pets = Pet.listAll();

        return Response.status(Status.OK).entity(pets).build();
    }
}