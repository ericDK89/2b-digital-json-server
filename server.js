const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

// Use the default middleware
const middlewares = jsonServer.defaults();

// Configure CORS options
const corsOptions = {
  origin: '*', // Permite todas as origens. Altere conforme necessário.
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

server.use(cors(corsOptions));
server.use(middlewares);

// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    "/*": "/$1",
  })
);

server.use(router);

// Listen to port
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
