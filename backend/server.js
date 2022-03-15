const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
// const cors = require('cors');
// const path = require('path');
// const outfits = require("./seeddata.js");

const apiRouter = require('./routes/controllers');

const isProduction = process.env.NODE_ENV === 'production';

const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../build')));
// dotenv.config();


app.use('/nicefit', apiRouter)

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build"), (err) => {
//     console.log('problem sendfile of react-build')
//   });
// });



app.listen(port, () => {
  console.log(`port ${port} | production: ${isProduction}`);
});
