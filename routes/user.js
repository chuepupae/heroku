const express = require("express");
const User = require("../models/users.model");
const router = express.Router();

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


router.route("/register").post((req, res) => {
    console.log("inside the register");
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        //username: "test"
    });
    user
        .save()
        .then(() => {
            console.log("user registered");
            res.status(200).json({ msg: "Successfully Registered !!! " });
        })
        .catch((err) => {
            res.status(403).json({ msg: err });
        });
});

module.exports = router;
//module.exports = router;