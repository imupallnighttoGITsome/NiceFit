const express = require("express");
const app = express.Router();

app.get('/', (req, res) => {
    res.send('on api route')
});