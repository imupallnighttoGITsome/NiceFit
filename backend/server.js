const express = require("express");
const outfits = require("./data/outfits")
const dotenv = require("dotenv");

const app = express();
dotenv.config();


app.get("/", (req, res) => {
    res.send("API is runnninin")
});

// app.get("/outfits", (req, res) => {
//     res.json(outfits)
// });


const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`server started on ${PORT}`))