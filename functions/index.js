const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MWUJoIOUk5DfM1uFHOxSQZ8OsjSrwHvU4ycTnQfVKcvXddiw6jsydHLgbJNq5rKQHhxz1Y6OdruSPr2zOIGHcQW001OsLFgca')

 // API

 exports.convertLargeFile = functions
    .runWith({
      // Ensure the function has enough memory and time
      // to process large files
      timeoutSeconds: 300,
      memory: "1GB",
    })
    .storage.object()
    .onFinalize((object) => {
      
    });
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/dani", (request, response) => response.status(200).send("hello Dani, apakabar sekarang? i know you are feeling bad, but thats okay bro, anything will worth it at the end whatever it is, Allah never fail you, AS ALWAYS"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/e-clone-web-1e9f6/us-central1/api