  
//external npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const databaseName = "Fitness-Tracker_db";

//assign port
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


//access database
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Fitness-Tracker_db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  .then(() => console.log(`successfully connected to database: ${databaseName}`));

  //access routes 
const routes = require("./routes");
app.use(routes)

//listen to port
app.listen(PORT, () => {
  console.log(`App running on here - CLICK - http://www.localhost:${PORT}`);
});