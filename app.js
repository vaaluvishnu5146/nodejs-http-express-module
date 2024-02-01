const express = require("express");
const APP_SERVER = express();

// set the view engine to ejs
APP_SERVER.set("view engine", "ejs");

// INJECT THE WEB SERVER
APP_SERVER.use("/", require("./webserver"));

// INJECT THE API CONTROLLER
APP_SERVER.use("/api/customers", require("./controller/Customer.controller"));
APP_SERVER.use("/api/bookings", require("./controller/Bookings.controller"));
APP_SERVER.use("/api/venues", require("./controller/Venue.controller"));
APP_SERVER.use("/api/auth", require("./controller/Auth.controller"));

module.exports = APP_SERVER;
