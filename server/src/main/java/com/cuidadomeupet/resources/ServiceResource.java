package com.cuidadomeupet.resources;

import java.util.ArrayList;
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

import com.cuidadomeupet.models.Service;
import com.cuidadomeupet.models.ServiceWrapper;
import com.cuidadomeupet.models.User;
import com.cuidadomeupet.utils.EnumUtilities;

@RequestScoped
@Path("services")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ServiceResource {
    
    @POST
    @Transactional
    public Response addService(@Valid Service service) throws Exception {

        service.setUser(User.findById(service.userId));
        service.persist();

        return Response.status(Status.OK).entity(service).build();
    }

    @PUT
    @Path("{id}")
    @Transactional
    public Response updateService(@PathParam("id") Long id, @Valid Service input) throws Exception {

        Service service = Service.findById(id);
        service.type = input.type;
        service.price = input.price;
        service.distance = input.distance;
        service.state = input.state;

        return Response.status(Status.OK).entity(service).build();
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public Response deleteService(@PathParam("id") Long id) throws Exception {

        Service service = Service.findById(id);

        service.delete();

        return Response.status(Status.OK).entity(service).build();
    }

    @GET
    @Path("{id}")
    public Response getService(@PathParam("id") Long id) throws Exception {

        Service service = Service.findById(id);

        return Response.status(Status.OK).entity(service).build();
    }

    @GET
    public Response getServices() throws Exception {

        List<Service> services = Service.listAll();

        List<ServiceWrapper> result = new ArrayList<>();

        services.forEach(s -> {
            ServiceWrapper wrapper = new ServiceWrapper();
            wrapper.service = s;
            wrapper.userName = s.getUserName();
            wrapper.serviceType = s.type.label();

            result.add(wrapper);
        });

        return Response.status(Status.OK).entity(result).build();
    }

    @GET
    @Path("types")
    public Response getServiceTypes() throws Exception {

        return Response.status(Status.OK).entity(EnumUtilities.toList(Service.Type.class)).build();
    }
}