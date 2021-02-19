const { json } = require('express');
const express = require('express')
const app = express();

const { ppid, title } = require('process');
const { stringify } = require('querystring');
const mongoose = require('mongoose');
const { Db } = require('mongodb');
const { assert } = require('console');
const urlPublice = 'mongodb+srv://mongodb:mongodb@cluster0.jwjnh.mongodb.net/mydatabase?retryWrites=true&w=majority';
const urlLocalhost = 'mongodb://localhost:27017/mydb';
//const collectionName = 'blogs';
const collectionName = 'test01';

mongoose.connect(urlPublice, { userNewParser: true, useUnifiedTopology: true })

var schema = mongoose.Schema({

    statusDevice: { type: String },
    timeStamp: { type: String },
    imagePath: { type: String },

})
const myColl = mongoose.model(collectionName, schema);

//==================================:: GET ::
app.use(express.json());

app.get('/', async(req, res) => {

    var result = await myColl.find({}).sort({
        _id: -1,
    }).limit(500);

    res.json(result)
})

app.post('/delete', async(req, res) => {

    var resultDelete = await myColl.deleteMany();
    console.log('Delete data in mongoDB !')
    res.send('DELETE!');
})

app.get('/delete', async(req, res) => {

    var resultDelete = await myColl.deleteMany();
    console.log('Delete data in mongoDB !')
    res.send('DELETE!');
})

// app.get('/', (req, res) => {
//     res.send("HELLO API")
// })

// app.get('/', (req, res) => {
//     res.json(json)
// })

app.listen(8080, () => {
    console.log("localhost:8080")
})
