const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');

const schedule=require("./routes/schedule")
app.use(bodyParser.json());
app.use(schedule)
app.listen(port, () => {
    console.log("Server is running on port " + port);
})