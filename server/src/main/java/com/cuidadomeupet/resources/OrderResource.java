package com.cuidadomeupet.resources;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.RequestScoped;
import javax.transaction.Transactional;
import javax.inject.Inject;
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

import com.cuidadomeupet.models.Order;
import com.cuidadomeupet.models.Service;
import com.cuidadomeupet.models.User;

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
    public Response addOrder(@Valid Order order) throws Exception {

        Long id = Long.parseLong(jwt.getSubject());

        User user = User.findById(id);
        Service service = Service.findById(order.serviceId);

        order.createdDate = new Date();
        order.totalValue = service.price;
        order.state = Order.State.WAITING;
        order.setUser(user);
        order.setService(service);
        order.persist();

        return Response.status(Status.OK).entity(order).build();
    }

    @PUT
    @Path("{id}")
    @Transactional
    public Response updateOrder(@PathParam("id") Long id, @Valid Order input) throws Exception {

        Order order = Order.findById(id);
        order.eventDate = input.eventDate;

        return Response.status(Status.OK).entity(order).build();
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public Response cancelOrder(@PathParam("id") Long id) throws Exception {

        Order order = Order.findById(id);
        order.state = Order.State.CANCELED;

        return Response.status(Status.OK).entity(order).build();
    }

    @GET
    @Path("{id}")
    public Response getOrder(@PathParam("id") Long id) throws Exception {

        Order order = Order.findById(id);

        return Response.status(Status.OK).entity(order).build();
    }
}