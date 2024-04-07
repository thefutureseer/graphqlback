const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const { ruruHTML } = require("ruru/server");
const { typeDefs, root } = require('../graphql/index.js');
const schema = typeDefs;

var app = express();

// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
);
 
// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/graphql" }))
});
 
// Start the server at port
app.listen(4000)
console.log("Go to http://localhost:4000 but also running a GraphQL API server at http://localhost:4000/graphql");