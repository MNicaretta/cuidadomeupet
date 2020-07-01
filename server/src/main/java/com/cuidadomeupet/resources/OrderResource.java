package com.cuidadomeupet.resources;

import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.cuidadomeupet.models.Address;
import com.cuidadomeupet.models.Order;
import com.cuidadomeupet.models.Pet;
import com.cuidadomeupet.models.Service;

import org.eclipse.microprofile.jwt.JsonWebToken;

@RequestScoped
@Path("orders")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class OrderResource {

    @Inject
    JsonWebToken jwt;
    
    @POST
    @Transactional
    @RolesAllowed({"user"})
    public Response addOrder(@Valid Order order) throws Exception {

        Service service = Service.findById(order.serviceId);

        if (service.type == Service.Type.SITTING) {
            order.setAddress(Address.findById(order.addressId));
        }

        order.totalValue = service.price;
        order.state = Order.State.WAITING;
        order.setPet(Pet.findById(order.petId));
        order.setService(service);
        order.persist();

        return Response.status(Status.OK).entity(order).build();
    }

    @PUT
    @Path("{id}")
    @Transactional
    @RolesAllowed({"user"})
    public Response updateOrder(@PathParam("id") Long id, Order input) throws Exception {

        Order order = Order.findById(id);
        order.state = input.state;

        return Response.status(Status.OK).entity(order).build();
    }
}