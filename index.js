const server = require('./server')

const port = process.env.PORT || 1337;

server.listen(port, () => {
  console.log(`*** Server Running at http://localhost:${port}`)
})