const { default: mongoose } = require("mongoose");

const BookingsSchema = mongoose.Schema({
  customerId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "customer",
  },
  venueId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "venue",
  },
  bookingDate: { type: Date, default: Date.now },
  bookingForDate: { type: Date, default: Date.now },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("booking", BookingsSchema);
