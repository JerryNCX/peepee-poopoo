// mongodb+srv://ncx030715:KNSfByDZLutSR2l5@softwareengfundementals.3rnna.mongodb.net/?retryWrites=true&w=majority&appName=SoftwareEngFundementals
// IPv4: 8.8.8.8 / DNS on Https (On)

const express = require('express');
const connectDB = require('./db.js');

const app = express();

connectDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})