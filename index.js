const express = require("express");
const body = require("express");
const bodyparser = require("body-parser");
const HTTP_SERVER = express();
const PORT = 5000;
const { connectDatabase } = require("./dbconfig");

connectDatabase();
// MVC - MODEL VIEW CONTROLLER
// MVRC - MODEL VIEW ROUTER CONTROLLER

// INJECTING MIDDLE-WARE
HTTP_SERVER.use(bodyparser.json());

HTTP_SERVER.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

HTTP_SERVER.use("/", require("./app"));
