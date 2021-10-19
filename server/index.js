// const http = require("http");
// const server = http.createServer(() => {});

// if (request.url === "/status" && request.method === "GET") {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.write(JSON.stringify({ message: "Service healthy" }));
//   response.end();
// }
//
// server.listen(4040);
// console.log("Listening on port 4040");

const express = require("express");
const app = express();

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

app.use(express.json());
app.use(logging);
app
  .route("/status")
  .get((request, response) => {
    response.status(200).json({ message: "Service healthy" });
  })
  .post((request, response) => {
    response.json({ requestBody: request.body });
  });
app
  .route("/pizzas")
  .get((request, response) => {
    // handle GET request
    response.send(JSON.stringify({ message: "All pizzas" }));
  })
  .post((request, response) => {
    response.send(JSON.stringify({ message: "Created pizza" }));
  });
app.route("/users/:id").get((request, response) => {
  // express adds a "params" Object to requests
  const id = request.params.id;
  // handle GET request for post with an id of "id"
  response.send(JSON.stringify({ user_id: id }));
});

const PORT = process.env.PORT || 4040;

app.listen(4040, () => console.log(`Listening on port${PORT}`));
