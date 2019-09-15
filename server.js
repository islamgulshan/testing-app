const express = require("express");

const path = require("path");

const app = express();

// Run the app by serving the static files
// in the dist directory

// fdsfdsf
app.use(express.static(__dirname + "/dist/testing-app"));

app.get("/*", function(req, res) {
res.sendFile(path.join(__dirname + "/dist/testing-app/index.html"));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 5000);