package com.cuidadomeupet.resources;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.cuidadomeupet.controllers.StatisticsController;

@Path("statistics")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class StatisticsResource {
    
    @GET
    @Path("species")
    @RolesAllowed({"user"})
    public Response getSpeciesStatistics() throws Exception {

        return Response.status(Status.OK).entity(StatisticsController.getSpeciesStatistics()).build();
    }
}