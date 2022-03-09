const express = require("express");
const cors = require("cors");
const path = require("path");
// const dotenv = require("dotenv");
// const outfits = require("./seeddata.js");

const apiRouter = require("./controller");

const port = process.env.PORT || 4000;
const isProduction = process.env.NODE_ENV === "production";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded.apply({ extended: true }));
app.use(express.static(path.join(__dirname, "../build")));
// dotenv.config();


app.use('/nicefit/', apiRouter)
// app.get("/", (req, res) => {
//   res.send("API is runnninin");
// });

// app.get("/outfits", (req, res) => {
//   res.send(outfits);
// });

app.listen(port, () => {
  console.log(`port ${port} | production: ${isProduction}`);
});
