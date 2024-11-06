// Import the Express library to set up a web server
import express from "express";

// Import the JSON data from "realPeople.json" as a JavaScript object
import realPeople from "./data/realPeople.json" with { type: "json" };

// Initialize the Express application
const app = express();

// Set the port number to 3000 for the server to listen on
const port = 3000;

// Define a GET route for the root URL ("/")
app.get("/", (req, res) => {
    // Send an HTML response containing names and a button
    // The button navigates to "/realPeople" when clicked
    res.send(`
      <h1>André Martins</h1>
      <h1>Alejandra Hernandez</h1>
      <h1>Hidetoshi Okada</h1>
      <button onclick="window.location.href='/realPeople'">Go to Real People API</button>
    `);
});

// Define a GET route for "/realPeople" to return JSON data
app.get("/realPeople", (req, res) => {
  // Send the contents of realPeople.json as the response
  res.send(realPeople);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message in the console when the server is successfully running
  console.log(`Example app listening on port http://localhost:${port}`);
});
