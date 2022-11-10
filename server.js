const express = require("express");
const app = express();
const cors = require("cors");
//-> cross-origin resource sharing
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connet to mongoose
mongoose.connect(
   "mongodb+srv://munchkin:<blank>@cluster0.iixkejd.mongodb.net/catcafeDB"
);

//require route
app.use("/contactus", require("./routes/formRoute"));

app.listen(4000, function () {
   console.log("express server is listening on port 4000");
});
