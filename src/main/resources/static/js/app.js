let app = (function (api) { 
    let _author = "YO";

    let _publicFunctions = {};

    _publicFunctions.login = function () {  

    };

    _publicFunctions.tweet = function () { 
        let content = $("#tweet-input").val();
        api.tweet(_author, content).then((res) => {
            console.log(res);
        })
    };

    _publicFunctions.getAllTweets = function () {  
        api.getAllTweets().then((res) => {
            let tweetsDiv = $("#tweet-replies-page");
            let tweets = "";
            res.forEach(tweet => {
                console.log(tweet);
                let markup = `
                    <div class="tweet">
                        <img class="profile-pic" src="./assets/Doggo-profile.jpg"/>
                        <div>
                            <p class="author">${tweet.author}</p>
                            <p>${tweet.content}</p>
                        </div>
                    </div>
                `;
                tweets = tweets.concat(markup);
            });
            console.log(tweets);
            tweetsDiv.html(tweets);
        });
    };

    return _publicFunctions;
})(client);