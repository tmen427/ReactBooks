const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;        
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const mongoose = require("mongoose");
const routes = require("./routes");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Use apiRoutes
app.use("/api", apiRoutes);           


app.use(routes);



// Send every request to the React app
// Define any API routes before this runs

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));             
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password123@ds241537.mlab.com:41537/heroku_kd0gjh7g");

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
