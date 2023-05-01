// Create server -------------------------------------------------------------------------
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotanv = require("dotenv");
require("colors");
const connectDb = require("./config/config");
// dotenv
dotanv.config();
// db config
connectDb();

// rest object
const app = express();

// midlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billRoute"));

// PORT
const PORT = process.env.PORT || 8080;
// listen

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}}`.bgCyan.white);
});

// ------------------------------------------------------------------------------------------
