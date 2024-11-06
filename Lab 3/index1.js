// Import the Express library, which is used to create the server and manage routes
import express from "express";

// Initialize an Express application
const app = express();

// Define the port number where the server will listen for incoming requests
const port = 3000;

// Set up a route to handle GET requests to the root URL ("/")
app.get("/", (req, res) => {
  res.send(`
      <h1>André Martins</h1>
      <h1>Alejandra Hernandez</h1>
      <h1>Hidetoshi Okada</h1>
  `);
});

// Start the server and have it listen on the specified port
app.listen(port, () => {
  // Log a message to the console indicating that the server is running and listening on the specified port
  console.log(`Example app listening on port http://localhost:${port}`);
});
