"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const items = require("./data/items.json");
const companies = require("./data/companies.json");

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

  // Endpoints that retrieves all items
  .get("/api/items", (req, res) => {
    const data = items;
    res.status(200).json({
      status: 200,
      message: "Successfully retrieved all items",
      items: data,
    });
  })

  // Endpoints that retrieves a specific
  .get("/api/items/:itemId", (req, res) => {
    const { itemId } = req.params;
    const singleItem = items.filter((item) => {
      return item._id === Number(`${req.params.itemId}`);
    });

    if (singleItem.length > 0) {
      res.status(200).json({
        status: 200,
        message: `Successfully retrieved item ${itemId} `,
        item: singleItem,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Couldn't find item",
      });
    }
  })

  // Endpoints that updates the quantity about specific item
  .post("api/items/:itemId", (req, res) => {
    // CODE HERE
    res.status(200).json({
      status: 200,
      message: `Successfully updated quantity of item ${itemId} `,
    });
  })

  // Endpoints that retrieves a list of companies filtered by country
  .get("api/companies", (req, res) => {
    const data = companies;
    res.status(200).json({
      status: 200,
      message: `Successfully retrieved all companies`,
      companies: data,
    });
  })

  // Endpoints that retrieves a list of all companies
  .get("api/companies/:companyId", (req, res) => {
    const { companyId } = req.params;
    const filteredCompanies = items.filter((company) => {
      return company._id === Number(`${req.params.itemId}`);
    });
    if (!filteredCompanies)
      return res.status(404).json({
        status: 404,
        message: "Could not find any company meeting the requirements",
      });
    res.status(200).json({
      status: 200,
      message: `Successfully retrieved ${companyId}'s info`,
      companies: filteredCompanies,
    });
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
