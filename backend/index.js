const express = require("express");
const app = express();

const cors = require("cors");
const cookiesParser = require("cookie-parser");
const mongoose = require("mongoose");

require("dotenv").config();
const PORT = process.env.PORT || 8000;

// database connection
const dbconnect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Database Connection is Successfull"))
      .catch((error) => console.error("Received an error", error.message));
  } catch (error) {
    console.error(error);
    res.status(500).json({
      data: "Internal server error",
      message: error.message,
    });
  }
};
dbconnect();

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookiesParser());

app.listen(PORT, () => {
  console.log(`Server is listing on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
