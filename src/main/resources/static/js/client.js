let client = (function () { 

    let _publicFunctions = {};
    let _server = "http://localhost:8080"

    _publicFunctions.login = function () {  

    };

    _publicFunctions.tweet = function (author, content) {  
        return $.ajax({
            url: `${_server}/v1/tweet`,
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
            url: `${_server}/v1/stream`,
            type: 'GET',
        });
    };

    return _publicFunctions;
})();