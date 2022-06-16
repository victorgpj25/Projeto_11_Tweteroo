import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express()
app.use(bodyParser.json());
app.use(cors())
app.listen(5000);

const users = []
const tweets = []
let latestTweets = []
let displayTweets = []

function addAvatar(tweetUsername, tweetContent) {
    let userData = users.filter( user => user.username === tweetUsername )[0]
    displayTweets.push({
        username: tweetUsername,
        avatar: userData.avatar,
        tweet: tweetContent
    })
}

app.post('/sign-up', (req, res) => {
    users.push(req.body);
    res.send("OK");
});

app.post('/tweets', (req, res) => {
    tweets.push(req.body);
    res.send("OK");
});

app.get('/tweets', (req, res) => {
    displayTweets = []
    latestTweets = tweets.slice(-10)
    latestTweets.map( tweet => addAvatar(tweet.username, tweet.tweet) )
    res.send(displayTweets.reverse()); // reverse() para colocar os tweets mais novos no topo
});

