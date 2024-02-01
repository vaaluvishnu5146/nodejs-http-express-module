const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  town: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("user", UserSchema);
