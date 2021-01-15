const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

/* mongoose.connect('mongodb+srv://iboxconnect:ibox12345678@cluster0.2wpyq.mongodb.net/AppDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
 */

const connection = mongoose.connection;
connection.once("open", () => {
    console.log(" MongoDB connected !!");
});

//middleware
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);

app.route("/").get((req, res) => res.json("Test API "));
app.listen(port, () => console.log(`welcome your listinnig at port ${port}`));