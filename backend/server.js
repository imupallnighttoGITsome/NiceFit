const express = require("express");
const dotenv = require("dotenv");
const outfits = require("./seeddata.js");

const app = express();
dotenv.config();


app.get("/", (req, res) => {
    res.send("API is runnninin")
});

app.get("/outfits", (req, res) => {
    res.send(outfits)
})




app.listen(5000, console.log('server started on 5000'));