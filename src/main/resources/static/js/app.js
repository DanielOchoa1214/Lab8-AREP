let app = (function (api) { 
    let _author = "YO";

    let _publicFunctions = {};

    _publicFunctions.init = function () { 
        _author = localStorage.getItem("user");
    };

    _publicFunctions.login = function (e) { 
        e.preventDefault();
        localStorage.setItem("user", $("#user").val());
        window.location.href = "https://lab8arep.auth.us-east-1.amazoncognito.com/login?client_id=5jkjcoesq9etsk4rgirfkf0jqs&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A5501%2Fsrc%2Fmain%2Fresources%2Fstatic%2F";
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