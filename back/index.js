import express from "express";
import cors from "cors";
import bodyParser from "body-parser";



const app = express()
app.use(bodyParser.json());
app.use(cors())
app.listen(5000);

const users = []
const tweets = []

app.post('/sign-up', (req, res) => {
    users.push(req.body);
    res.send("OK");
});

app.post('/tweets', (req, res) => {
    tweets.push(req.body);
    res.send("OK");
});

