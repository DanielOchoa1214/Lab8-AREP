package org.eci.arep.service;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.bson.Document;
import org.eci.arep.persistence.StreamPersistence;

import java.util.List;

@ApplicationScoped
public class StreamService {

    @Inject
    StreamPersistence persistence;

    public List<Document> getLastPosts(){
        return persistence.getLastPosts().stream().map((Document d) -> {
            Document newDocument = new Document();
            newDocument.put("author", d.get("author"));
            newDocument.put("content", d.get("content"));
            return newDocument;
        }).toList();
    }
}
