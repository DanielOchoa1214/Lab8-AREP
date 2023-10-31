package org.eci.arep.controller;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.eci.arep.service.StreamService;

@Path("/v1/stream")
public class StreamController {

    @Inject
    StreamService service;

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getTweets(){
        System.out.println("HOLI");
        return Response.ok(service.getLastPosts()).build();
    }
}
