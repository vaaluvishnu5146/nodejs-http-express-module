const { default: mongoose } = require("mongoose");

async function connectDatabase() {
  const uri =
    process.env.NODE_ENV === "development"
      ? `${process.env.MONGODB_DEV_URI}${process.env.MONGODB_DEV_NAME}`
      : `${process.env.MONGODB_PROD_URI}${process.env.MONGODB_PROD_NAME}`;
  try {
    const response = await mongoose.connect(uri);
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
