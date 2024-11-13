const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4700;
const mongoose = require('mongoose');
const mongodb_uri = process.env.URI;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(mongodb_uri)
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log(err);
    });

const nigerianFoods = [
    {
        name: 'Egusi Soup',
        price: 200
    },
    {
        name: 'Egusi Soup',
        price: 200
    },
    {
        name: 'Egusi Soup',
        price: 200
    },
    {
        name: 'Egusi Soup',
        price: 200
    }
]

let usernameSchema = mongoose.Schema({
    item: String
})

let userModel = mongoose.model('Users', usernameSchema);

app.get('/home', (req, res) => {
    res.send(nigerianFoods);
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    const form = new userModel(req.body);
    form.save();
})
app.get('/getusername' , (req, res) => {
    userModel.find()
    .then((result) => {
        console.log(result);
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
})

app.listen(port, () => {
    console.log(`lift off.. server listening at http://localhost:${port}`);
});
