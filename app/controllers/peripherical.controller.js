const db = require("../models");
const Peripherical = db.periphericals;
const Op = db.Sequelize.Op;

// Create and Save a new Gateway
exports.create = (req, res) => {
  // Validate request
  if (!req.body.uid || !req.body.vendor || !req.body.gateway_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

    // Comprobar que exista el gateway con id: gateway_id
  // Create a Gateway
  const peripherical = {
    uid: req.body.uid,
    vendor: req.body.vendor,
    gateway_id: req.body.gateway_id,
    status: req.body.status ? req.body.status : false
  };

  // Save Gateway in the database
  Peripherical.create(peripherical)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Gateway."
      });
    });
};
/*
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Gateway.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Gateway with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Gateway.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Gateway with id=" + id
      });
    });
};

// Update a Gateway by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Gateway.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Gateway was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Gateway with id=${id}. Maybe Gateway was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Gateway with id=" + id
      });
    });
};

// Delete a Gateway with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Gateway.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Gateway was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Gateway with id=${id}. Maybe Gateway was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Gateway with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Gateway.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// find all published Gateway
exports.findAllPublished = (req, res) => {
  Gateway.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
*/