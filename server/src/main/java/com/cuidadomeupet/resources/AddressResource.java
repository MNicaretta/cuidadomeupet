package com.cuidadomeupet.resources;

import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.cuidadomeupet.models.Address;
import com.cuidadomeupet.models.User;
import com.cuidadomeupet.utils.EnumUtils;

import org.eclipse.microprofile.jwt.JsonWebToken;

@RequestScoped
@Path("addresses")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AddressResource {
    
    @Inject
    JsonWebToken jwt;

    @POST
    @Transactional
    @RolesAllowed({"user"})
    public Response addAddress(@Valid Address address) throws Exception {

        address.setUser(User.findById(Long.parseLong(jwt.getSubject())));
        address.persist();

        return Response.status(Status.OK).entity(address).build();
    }

    @GET
    @RolesAllowed({"user"})
    public Response getAvailableAddresses() throws Exception {

        User user = User.findById(Long.parseLong(jwt.getSubject()));

        return Response.status(Status.OK).entity(Address.findByUser(user)).build();
    }

    @GET
    @Path("types")
    public Response getAddressTypes() throws Exception {

        return Response.status(Status.OK).entity(EnumUtils.toList(Address.Type.class)).build();
    }
}