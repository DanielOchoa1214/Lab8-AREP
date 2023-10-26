package org.eci.arep.controller;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.eci.arep.model.Tweet;
import org.eci.arep.service.TweetService;

@Path("/v1/tweet")
public class TweetController {

    @Inject
    TweetService service;

    @POST
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response postTweet(Tweet tweet){
        return Response.ok(service.addTweet(tweet)).build();
    }
}
