const express = require("express");
const app = express();
const mongoose = require("mongoose");
const route = require("./route");
require("dotenv").config();
app.use(express.json());
app.use(route);

(async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected successfully");
    app.listen(process.env.PORT, () => {
      console.log(`erver running at http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
