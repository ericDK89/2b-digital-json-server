const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

// Configure CORS options
const corsOptions = {
  origin: '*', // Permite todas as origens. Altere conforme necessário.
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false,
  optionsSuccessStatus: 204
};

// Use the CORS middleware
server.use(cors(corsOptions));

// Use the default middleware
const middlewares = jsonServer.defaults();
server.use(middlewares);

// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);

// Listen to port
server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});

// Export the Server API
module.exports = server;
