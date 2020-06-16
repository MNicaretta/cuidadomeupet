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

import com.cuidadomeupet.models.Address;
import com.cuidadomeupet.models.User;

@RequestScoped
@Path("addresses")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AddressResource {
    
    @POST
    @Transactional
    public Response addAddress(@Valid Address address) throws Exception {

        address.setUser(User.findById(address.userId));
        address.persist();

        return Response.status(Status.OK).entity(address).build();
    }

    @PUT
    @Path("{id}")
    @Transactional
    public Response updateAddress(@PathParam("id") Long id, @Valid Address input) throws Exception {

        Address address = Address.findById(id);
        address.type = input.type;
        address.size = input.size;
        address.address= input.address;
        address.zip = input.zip;

        return Response.status(Status.OK).entity(address).build();
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public Response deleteAddress(@PathParam("id") Long id) throws Exception {

        Address address = Address.findById(id);

        address.delete();

        return Response.status(Status.OK).entity(address).build();
    }

    @GET
    @Path("{id}")
    public Response getAddress(@PathParam("id") Long id) throws Exception {

        Address address = Address.findById(id);

        return Response.status(Status.OK).entity(address).build();
    }

    @GET
    public Response getAddresses() throws Exception {

        List<Address> addresses = Address.listAll();

        return Response.status(Status.OK).entity(addresses).build();
    }

}