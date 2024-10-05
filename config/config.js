const mongoose = require("mongoose");
require("colors");

// connect DB function

const connectDb = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://najmussakib173:KamiMbD4UuCzM27G@cluster0.z8npa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.log(`Error: ${error.message}`.bgRed);
    process.exit(1);
  }
};

// export
module.exports = connectDb;
