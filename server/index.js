"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const items = require("./data/items.json");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  .get("/bacon", (req, res) => res.status(200).json("🥓"))
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 6e71e50bddffebef634a04e1f34560a0339067bd
=======
  // Endpoints that retrieves all items
  .get("/items", (req, res) => {
    // CODE HERE
    res.status(200).json({
      status: 200,
      message: "Successfully retrieved all items",
    });
  })

  // Endpoints that retrieves a specific
  .get("/items/:itemId", (req, res) => {
    console.log(items);
    res.status(200).json({
      status: 200,
      message: `Successfully retrieved item ${itemId} `,
    });
  })

  // Endpoints that updates the quantity about specific item
  .post("/items/:itemId", (req, res) => {
    // CODE HERE
    res.status(200).json({
      status: 200,
      message: `Successfully updated quantity of item ${itemId} `,
    });
  })

  // Endpoints that retrieves a list of all companies
  .get("/companies", (req, res) => {
    // CODE HERE
    res.status(200).json({
      status: 200,
      message: `Successfully retrieved all companies`,
    });
  })

  // Endpoints that retrieves a list of all companies
  .get("/companies/:companyId", (req, res) => {
    // CODE HERE
    res.status(200).json({
      status: 200,
      message: `Successfully retrieved ${companyId}'s info`,
    });
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
