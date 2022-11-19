const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

// const path = __dirname + '/app/views/';
// app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");
const Role = db.role;

// db.sequelize.sync();
// drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la APiRest." });
});

require("./app/routes/gateway.routes")(app);
require("./app/routes/peripherical.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}