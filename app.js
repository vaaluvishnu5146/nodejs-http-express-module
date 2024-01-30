const express = require("express");
const APP_SERVER = express();

// INJECT THE API CONTROLLER
APP_SERVER.use("/api/customers", require("./controller/Customer.controller"));
APP_SERVER.use("/api/bookings", require("./controller/Bookings.controller"));
APP_SERVER.use("/api/venues", require("./controller/Venue.controller"));

module.exports = APP_SERVER;
