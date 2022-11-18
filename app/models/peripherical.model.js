module.exports = (sequelize, Sequelize) => {
  const Peripherical = sequelize.define("peripherical", {
    uid: {
      type: Sequelize.STRING
    },
    vendor: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    },
    gateway_id: {
      type: Sequelize.INTEGER
    },
  });

  return Peripherical;
};
