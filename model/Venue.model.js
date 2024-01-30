const { default: mongoose } = require("mongoose");

const VenueSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  seatingCapacity: {
    type: Number,
    required: true,
  },
  amenities: {
    type: Array,
    required: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("venue", VenueSchema);
