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
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.cuidadomeupet.models.Address;
import com.cuidadomeupet.models.Pet;
import com.cuidadomeupet.models.Service;
import com.cuidadomeupet.models.User;
import com.cuidadomeupet.utils.EnumUtils;

import org.eclipse.microprofile.jwt.JsonWebToken;

@RequestScoped
@Path("services")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ServiceResource {
    
    @Inject
    JsonWebToken jwt;

    @POST
    @Transactional
    @RolesAllowed({"user"})
    public Response addService(@Valid Service service) throws Exception {

        service.setUser(User.findById(service.userId));

        if (service.type == Service.Type.HOSTING) {
            service.setAddress(Address.findById(service.addressId));
        } else {
            service.setAddress(null);
        }

        service.persist();

        return Response.status(Status.OK).entity(service).build();
    }

    @GET
    @Path("{id}")
    public Response getService(@PathParam("id") Long id) throws Exception {

        Service service = Service.findById(id);

        if (jwt.getSubject() != null) {
            User user = User.findById(Long.parseLong(jwt.getSubject()));

            service.schedulable = user.id != service.userId;

            if (service.schedulable) {
                service.availablePets = Pet.findByUser(user, service.species);
                service.availableAddresses = Address.findByUser(user);
            }
        }

        return Response.status(Status.OK).entity(service).build();
    }

    @GET
    public Response getServices() throws Exception {

        return Response.status(Status.OK).entity(Service.listAll()).build();
    }

    @GET
    @Path("types")
    public Response getServiceTypes() throws Exception {

        return Response.status(Status.OK).entity(EnumUtils.toList(Service.Type.class)).build();
    }
}