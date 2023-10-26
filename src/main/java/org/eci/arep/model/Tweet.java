package org.eci.arep.model;

public class Tweet {

    private final String author, content;

    public Tweet(String author, String content) {
        this.author = author;
        this.content = content;
    }

    public String getAuthor() {
        return author;
    }

    public String getContent() {
        return content;
    }
}
