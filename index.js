const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const HTTP_SERVER = express();
const PORT = 5000;
const { connectDatabase } = require("./dbconfig");

var whitelist = ["http://localhost:5173", undefined];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Enabling cors
HTTP_SERVER.use(cors(corsOptions));

// ENABLING APPLICATION LEVEL ENV
require("dotenv").config();

connectDatabase();
// MVC - MODEL VIEW CONTROLLER
// MVRC - MODEL VIEW ROUTER CONTROLLER
HTTP_SERVER.use(express.static(__dirname + "/public"));

// INJECTING MIDDLE-WARE
HTTP_SERVER.use(bodyparser.json());

HTTP_SERVER.listen(PORT, process.env.HOSTNAME, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

HTTP_SERVER.use("/", require("./app"));
