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

import com.cuidadomeupet.models.Evaluation;
import com.cuidadomeupet.models.Order;
import com.cuidadomeupet.models.User;

@RequestScoped
@Path("evaluations")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class EvaluationResource {
    
    @POST
    @Transactional
    public Response addEvaluation(@Valid Evaluation evaluation) throws Exception {

        evaluation.setUser(User.findById(evaluation.userId));
        evaluation.setOrder(Order.findById(evaluation.orderId));
        evaluation.persist();

        return Response.status(Status.OK).entity(evaluation).build();
    }

    @PUT
    @Path("{id}")
    @Transactional
    public Response updateEvaluation(@PathParam("id") Long id, @Valid Evaluation input) throws Exception {

        Evaluation evaluation = Evaluation.findById(id);
        evaluation.grade = input.grade;
        evaluation.commentaries = input.commentaries;

        return Response.status(Status.OK).entity(evaluation).build();
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public Response deleteEvaluation(@PathParam("id") Long id) throws Exception {

        Evaluation evaluation = Evaluation.findById(id);

        evaluation.delete();

        return Response.status(Status.OK).entity(evaluation).build();
    }

    @GET
    @Path("{id}")
    public Response getEvaluation(@PathParam("id") Long id) throws Exception {

        Evaluation evaluation = Evaluation.findById(id);

        return Response.status(Status.OK).entity(evaluation).build();
    }

    @GET
    public Response getEvaluations() throws Exception {

        List<Evaluation> evaluations = Evaluation.listAll();

        return Response.status(Status.OK).entity(evaluations).build();
    }

}