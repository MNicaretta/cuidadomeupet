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
import com.cuidadomeupet.model.Service;
import com.cuidadomeupet.services.ServiceService;

@RequestScoped
@Path("services")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ServiceResource {
    
    @Inject
    ServiceService serviceService;

    @POST
    public Response addService(Service service) throws Exception {

        serviceService.addService(service);

        return Response.status(Status.OK).entity(service).build();
    }

    @PUT
    @Path("{id}/{revision}")
    public Response updateService(@PathParam("id") Integer id, @PathParam("revision") Integer revision, Service service) throws Exception {

        service.setId(id);
        service.setRevision(revision);

        serviceService.updateService(service);

        return Response.status(Status.OK).entity(service).build();
    }

    @DELETE
    @Path("{id}/{revision}")
    public Response deleteService(@PathParam("id") Integer id, @PathParam("revision") Integer revision) throws Exception {

        Entity entity = new Entity();
        entity.setId(id);
        entity.setRevision(revision);

        Service service = serviceService.getService(entity);

        serviceService.deleteService(service);

        return Response.status(Status.OK).entity(service).build();
    }

    @GET
    @Path("{id}/{revision}")
    public Response getService(@PathParam("id") Integer id, @PathParam("revision") Integer revision) throws Exception {

        Entity entity = new Entity();
        entity.setId(id);
        entity.setRevision(revision);

        Service service = serviceService.getService(entity);

        return Response.status(Status.OK).entity(service).build();
    }

    @GET
    public Response getServices() throws Exception {

        List<Service> services = serviceService.getServices();

        return Response.status(Status.OK).entity(services).build();
    }

}