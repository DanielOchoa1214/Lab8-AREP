let client = (function () { 

    let _publicFunctions = {};
    let _stream_server = "http://54.152.139.1:8080";
    let _tweet_server = "http://3.88.18.110:8080"

    _publicFunctions.tweet = function (author, content) {  
        return $.ajax({
            url: `${_tweet_server}/v1/tweet`,
            type: 'POST',
            data: JSON.stringify({
                author: author,
                content: content,
            }),
            contentType: "application/json",
        });
    };

    _publicFunctions.getAllTweets = function () {  
        return $.ajax({
            url: `${_stream_server}/v1/stream`,
            type: 'GET',
        });
    };

    return _publicFunctions;
})();