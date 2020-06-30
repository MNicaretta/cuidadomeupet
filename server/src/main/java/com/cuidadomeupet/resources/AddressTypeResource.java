package com.cuidadomeupet.resources;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.cuidadomeupet.models.AddressType;
import com.cuidadomeupet.utils.EnumUtilities;

@RequestScoped
@Path("addressType")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AddressTypeResource {
    
    @GET
    public Response getAddressTypes() throws Exception {

        return Response.status(Status.OK).entity(EnumUtilities.toList(AddressType.class)).build();
    }
}