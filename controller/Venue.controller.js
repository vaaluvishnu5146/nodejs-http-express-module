const VenueController = require("express").Router();
const VenueModel = require("../model/Venue.model");
const { getAllVenue } = require("../routes/venue.router");

VenueController.get("/", (req, res) => {
  getAllVenue()
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json({
          message: "Venue fetched successfully!!",
          data: response,
        });
      } else {
        res.status(200).json({
          message: "No Venue found!!",
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

VenueController.post("/create", (req, res) => {
  const Venue = new VenueModel(req.body);
  Venue.save()
    .then((response) => {
      if (response._id) {
        res.status(200).json({
          success: true,
          message: "Venue created successfully!",
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

module.exports = VenueController;
