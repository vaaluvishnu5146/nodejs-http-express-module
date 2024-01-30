const { default: mongoose } = require("mongoose");

async function connectDatabase() {
  try {
    const response = await mongoose.connect(
      "mongodb://localhost:27017/bookings"
    );
    if (response.connections.length > 0) {
      console.log("Database connection successful");
    } else {
      throw new Error("Connection unsuccessful");
    }
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  connectDatabase,
};
