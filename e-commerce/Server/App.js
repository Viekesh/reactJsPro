require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");



const port = 3001;

app.listen(port, () => {
    console.log(`server is start on port no ${port}`);
})