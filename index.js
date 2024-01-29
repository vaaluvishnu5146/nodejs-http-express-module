const express = require("express");
const body = require("express");
const bodyparser = require("body-parser");
const HTTP_SERVER = express();
const PORT = 5000;

// MVC - MODEL VIEW CONTROLLER
// MVRC - MODEL VIEW ROUTER CONTROLLER

// INJECTING MIDDLE-WARE
HTTP_SERVER.use(bodyparser.json());

HTTP_SERVER.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

HTTP_SERVER.get("/", (req, res) => {
  res.status(200).json({
    message: "Successful!!",
  });
});

HTTP_SERVER.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Post request hit",
  });
});

HTTP_SERVER.get("/user/:id/:type", (req, res) => {
  const param = req.params;
  const queryParams = req.query;
  console.log(param, queryParams);
  res.status(200).json({
    message: "GET WITH ID request hit",
  });
});
