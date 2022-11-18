module.exports = app => {
  const gateways = require("../controllers/gateway.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", gateways.create);

  // Retrieve all Gateways
  router.get("/", gateways.findAll);

  // Retrieve all published Gateways
  router.get("/published", gateways.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", gateways.findOne);

  // Update a Tutorial with id
  router.put("/:id", gateways.update);

  // Delete a Tutorial with id
  router.delete("/:id", gateways.delete);

  // Delete all Gateways
  router.delete("/", gateways.deleteAll);

  app.use('/api/gateways', router);
};
