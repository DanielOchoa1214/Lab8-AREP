package org.eci.arep.service;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.bson.Document;
import org.eci.arep.model.Tweet;
import org.eci.arep.persistence.TweetPersistence;

@ApplicationScoped
public class TweetService {
    @Inject
    TweetPersistence persistence;

    public Tweet addTweet(Tweet tweet){
        Document doc = new Document();
        doc.put("author", tweet.getAuthor());
        doc.put("content", tweet.getContent());
        persistence.insertTweet(doc);
        return tweet;
    }
}
