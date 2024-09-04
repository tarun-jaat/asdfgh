const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const userAuth = require("./routes/userRoutes");

const dotenv = require("dotenv");

dotenv.config();

const port = process.env.AUTHPORT || 9001;
 
const connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("DB Connected Successfully 🔥"))
    .catch((error) => {
      console.log("DB Connection Failed");
      console.error(error);
      process.exit(1);
    });
};

connect();

app.use(express.json());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userAuth);
app.listen(port, () => console.log(`Auth server running on port ${port}`));
  