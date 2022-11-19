module.exports = app => {
  const periphericals = require("../controllers/peripherical.controller.js");

  var router = require("express").Router();

  // Create a new Gateway
  router.post("/", periphericals.create);

  /*// Retrieve all Tutorials
  router.get("gateways/", gateways.findAll);

  // Retrieve all published Tutorials
  router.get("gateways/published", gateways.findAllPublished);

  // Retrieve a single Gateway with id
  router.get("gateways/:id", gateways.findOne);

  // Update a Gateway with id
  router.put("gateways/:id", gateways.update);

  // Delete a Gateway with id
  router.delete("gateways/:id", gateways.delete);

  // Delete all Tutorials
  router.delete("gateways/", gateways.deleteAll);*/

  app.use('/api/periphericals', router);
};
