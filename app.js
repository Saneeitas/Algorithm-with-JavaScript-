/** @format */
require("dotenv").config();
const express = require("express");


const app = express();



//Routes
app.use("/api", (req,res)=> {
  res.send("Hello")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
