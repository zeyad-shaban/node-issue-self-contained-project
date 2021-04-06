const express = require('express')
const app = express()
const mongoose = require('mongoose')


// The Mongoose Stuff

const userSchema = new mongoose.Schema({
    username: {
        // I don't get auto complete for any of those properties
        type: String,
        required: true,
        min: 5,
        max: 25,
        // END
    }
})

// END The Mongoose Stuff




app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(5000)

// This is not my way of writing code neither comments :)