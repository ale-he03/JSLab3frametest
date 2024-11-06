// Import the Express library to set up the web server and handle routing
import express from "express";

// Initialize an Express application
const app = express();

// Define the port number where the server will listen for incoming requests
const port = 3000;

// Define a route using the `app.route` method for the "/route" endpoint
app
  .route("/route")
  // Handle GET requests to "/route"
  .get((req, res) => {
    // Respond with a message for GET requests
    res.send("Getting Stuff");
  })
  // Handle POST requests to "/route"
  .post((req, res) => {
    // Respond with a message for POST requests
    res.send("Posting stuff");
  })
  // Handle PUT requests to "/route"
  .put((req, res) => {
    // Respond with a message for PUT requests
    res.send("Putting stuff");
  })
  // Handle DELETE requests to "/route"
  .delete((req, res) => {
    // Respond with a message for DELETE requests
    res.send("Deleting Stuff");
  });

// Start the server and have it listen on the specified port
app.listen(port, () => {
  // Log a message to the console indicating that the server is running
  console.log(`Example app listening on port http://localhost:${port}`);
});
