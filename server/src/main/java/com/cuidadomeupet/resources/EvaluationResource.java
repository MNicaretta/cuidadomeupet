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

import com.cuidadomeupet.models.Evaluation;
import com.cuidadomeupet.models.Order;
import com.cuidadomeupet.models.Service;

import org.eclipse.microprofile.jwt.JsonWebToken;

@RequestScoped
@Path("evaluations")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class EvaluationResource {
    
    @Inject
    JsonWebToken jwt;

    @POST
    @Transactional
    @RolesAllowed({"user"})
    public Response addEvaluation(@Valid Evaluation evaluation) throws Exception {

        evaluation.setOrder(Order.findById(evaluation.orderId));
        evaluation.persist();

        return Response.status(Status.OK).entity(evaluation).build();
    }

    @GET
    @Path("{serviceId}")
    public Response getEvaluations(@PathParam("serviceId") Long serviceId) throws Exception {

        Service service = Service.findById(serviceId);

        return Response.status(Status.OK).entity(Evaluation.findByService(service)).build();
    }
}