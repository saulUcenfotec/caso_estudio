const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


const uri = "mongodb+srv://saul-rojas-898:1233456@caso.rt3unup.mongodb.net/?retryWrites=true&w=majority&appName=caso";
const app = express();
const ruta = path.join(__dirname, '..', 'Public');
app.use(cors());

app.use(express.static(ruta));
const port = 3000;
const userRoutes = require('./routes/route');


async function start() {
    try {
        await mongoose.connect(uri);
    } catch (err) {
        console.log(err);
    }
}

start();

app.use('', userRoutes);


app.listen(port, () => {
    console.log(`Express backend running on localhost: ${port}`);
});