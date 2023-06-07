require("dotenv").config(); 
let mongoose = require("mongoose");
mongoose.set("strictQuery", true);
//const mongoURI = process.env.MONGODBURI;
 const connectToMongo = async () => {
  mongoose
    .connect("mongodb://localhost:27017/bookmyshow", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connection established with mongodb server online");
    })
    .catch((err) => {
      console.log("error while connection", err);
    });
};

exports.connection = connectToMongo;
