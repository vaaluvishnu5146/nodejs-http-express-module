const BookingsRouter = require("express").Router();
const BookingsModel = require("../model/Bookings.model");

BookingsRouter.get("/", (req, res) => {
  BookingsModel.find()
    .select("venueId customerId")
    .populate("venueId customerId")
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json({
          message: "Bookings fetched successfully!!",
          data: response,
        });
      } else {
        res.status(200).json({
          message: "No Bookings found!!",
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

BookingsRouter.post("/create", (req, res) => {
  const Bookings = new BookingsModel(req.body);
  Bookings.save()
    .then((response) => {
      if (response._id) {
        res.status(200).json({
          success: true,
          message: "Booking created successfully!",
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

module.exports = BookingsRouter;
