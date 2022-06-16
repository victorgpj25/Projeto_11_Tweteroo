import express from "express";
import cors from "cors";

const app = express()

const users = []

app.post('/sign-up', (req, res) => {
    users.push({ name: "Fulano" });
    res.send(pessoa);
  });


  app.listen(5000);