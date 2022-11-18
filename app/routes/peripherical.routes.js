module.exports = app => {
  const periphericals = require("../controllers/peripherical.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", periphericals.create);

  /*// Retrieve all Tutorials
  router.get("gateways/", gateways.findAll);

  // Retrieve all published Tutorials
  router.get("gateways/published", gateways.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("gateways/:id", gateways.findOne);

  // Update a Tutorial with id
  router.put("gateways/:id", gateways.update);

  // Delete a Tutorial with id
  router.delete("gateways/:id", gateways.delete);

  // Delete all Tutorials
  router.delete("gateways/", gateways.deleteAll);*/

  app.use('/api/periphericals', router);
};
