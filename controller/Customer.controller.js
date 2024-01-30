const CustomerRouter = require("express").Router();
const CustomerModel = require("../model/Customer.model");

CustomerRouter.get("/", (req, res) => {
  CustomerModel.find()
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json({
          message: "Customer fetched successfully!!",
          data: response,
        });
      } else {
        res.status(200).json({
          message: "No customer found!!",
          data: response,
        });
      }
    })
    .catch((e) =>
      res.status(500).json({
        error: e,
      })
    );
});

CustomerRouter.post("/create", (req, res) => {
  const Customer = new CustomerModel(req.body);
  Customer.save()
    .then((response) => {
      if (response._id) {
        res.status(200).json({
          success: true,
          message: "Customer crete4d successfully!",
        });
      } else {
        res.status(500).json({
          success: false,
          error: "Something wrong!",
        });
      }
    })
    .catch((e) => {
      res.status(400).json({
        success: false,
        error: e,
      });
    });
});

// CustomerRouter.get("/user/:id/:type", (req, res) => {
//   const param = req.params;
//   const queryParams = req.query;
//   console.log(param, queryParams);
//   res.status(200).json({
//     message: "GET WITH ID request hit",
//   });
// });

module.exports = CustomerRouter;
