package com.cuidadomeupet.resources;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.cuidadomeupet.models.Species;

@RequestScoped
@Path("species")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SpeciesResource {
    
    @GET
    public Response getSpecies() {

        return Response.status(Status.OK).entity(getSpeciesList()).build();
    }

    private List<Map<String, Object>> getSpeciesList() {

        List<Map<String, Object>> result = new ArrayList<>();

        for (Species species : Species.values()) {
            result.add(Map.of("label", species.label,
                              "value", species.name()));
        }

        return result;
    }
}