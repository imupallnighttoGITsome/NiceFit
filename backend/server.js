const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } =  require('./middleware/errorMiddleware');
const connectDB = require('./config/conn')
const port = process.env.PORT || 5000;
// const cors = require('cors');
// const path = require('path');
// const outfits = require("./seeddata.js");

// const apiRouter = require('./controllers/controllers');

// const isProduction = process.env.NODE_ENV === 'production';
connectDB();
const app = express();
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, '../build')));
// dotenv.config();


app.use('/nicefit', require('./routes/niceFitRoutes'))
app.use('/nicefit/user', require('./routes/userRoutes'))

app.use(errorHandler);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build"), (err) => {
//     console.log('problem sendfile of react-build')
//   });
// });



app.listen(port, () => {
  console.log(`port running:  ${port}`);
});
