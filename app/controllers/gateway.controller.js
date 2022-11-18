const db = require("../models");
const Gateway = db.gateways;
const Op = db.Sequelize.Op;

// Create and Save a new Gateway
exports.create = (req, res) => {
  // Validate request
  if (!req.body.serial_number || !req.body.human_readable || !req.body.ipv4_address) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Gateway
  const gateway = {
    serial_number: req.body.serial_number,
    human_readable: req.body.human_readable,
    ipv4_address: req.body.ipv4_address,
    published: req.body.published ? req.body.published : false
  };

  // Save Gateway in the database
  Gateway.create(gateway)
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

// Retrieve all Gateways from the database.
exports.findAll = (req, res) => {
  const serial_number = req.query.serial_number;
  var condition = serial_number ? { serial_number: { [Op.like]: `%${serial_number}%` } } : null;

  Gateway.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving gateways."
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

// Delete all Gateways from the database.
exports.deleteAll = (req, res) => {
  Gateway.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Gateways were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all gateways."
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
          err.message || "Some error occurred while retrieving gateways."
      });
    });
};
