module.exports = (sequelize, Sequelize) => {
  const Gateway = sequelize.define("gateway", {
    serial_number: {
      type: Sequelize.STRING
    },
    human_readable: {
      type: Sequelize.STRING
    },
    ipv4_address: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Gateway;
};
