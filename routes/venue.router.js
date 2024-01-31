const VenueModel = require("../model/Venue.model");

async function getAllVenue() {
  return await VenueModel.find();
}

module.exports = {
  getAllVenue,
};
