const express = require("express");
const app = express();
const userRouter = require("./router");
const mongoose = require('mongoose');


app.use(express.json());


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1/User",
  );





app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});

app.use("/api/user", userRouter);




module.exports = app;
