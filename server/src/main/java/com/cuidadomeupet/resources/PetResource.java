package com.cuidadomeupet.resources;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
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

import com.cuidadomeupet.model.Entity;
import com.cuidadomeupet.model.Pet;
import com.cuidadomeupet.services.PetService;

@RequestScoped
@Path("pets")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PetResource {

    @Inject
    PetService service;

    @POST
    public Response addPet(Pet pet) throws Exception {

        service.addPet(pet);

        return Response.status(Status.OK).entity(pet).build();
    }

    @PUT
    @Path("{id}/{revision}")
    public Response updatePet(@PathParam("id") Integer id, @PathParam("revision") Integer revision, Pet pet) throws Exception {

        pet.setId(id);
        pet.setRevision(revision);

        service.updatePet(pet);

        return Response.status(Status.OK).entity(pet).build();
    }

    @DELETE
    @Path("{id}/{revision}")
    public Response deletePet(@PathParam("id") Integer id, @PathParam("revision") Integer revision) throws Exception {

        Entity entity = new Entity();
        entity.setId(id);
        entity.setRevision(revision);

        Pet pet = service.getPet(entity);

        service.deletePet(pet);

        return Response.status(Status.OK).entity(pet).build();
    }

    @GET
    @Path("{id}/{revision}")
    public Response getPet(@PathParam("id") Integer id, @PathParam("revision") Integer revision) throws Exception {

        Entity entity = new Entity();
        entity.setId(id);
        entity.setRevision(revision);

        Pet pet = service.getPet(entity);

        return Response.status(Status.OK).entity(pet).build();
    }

    @GET
    public Response getPets() throws Exception {

        List<Pet> pets = service.getPets();

        return Response.status(Status.OK).entity(pets).build();
    }
}