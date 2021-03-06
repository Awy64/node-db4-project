const express = require('express');
const recipesRouter = require('./recipes/recipes-router')


const server = express();

server.use(express.json())

server.use("/api/recipes", recipesRouter)


server.get('/', (req, res) => {
  res.json({API: "up and running"})
})

module.exports = server;