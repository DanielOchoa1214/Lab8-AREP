package org.eci.arep.controller;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.eci.arep.service.UserService;

@Path("/v1/user")
public class UserController {

    @Inject
    UserService service;

    @Path("/health")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response health(){
        return Response.ok("Im aliveeee").build();
    }

    @Path("/{username}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUser(@PathParam("username") String username){

        return Response.ok("Im aliveeee").build();
    }
}
