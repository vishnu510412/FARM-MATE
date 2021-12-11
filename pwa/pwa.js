const express = require("express");
const path    = require("path");

const app     = express.Router();

app.use(express.static("./assets"));


app.get("/manifest.json", function(req, res){
    res.header("Content-Type", "text/cache-manifest");
    res.sendFile(path.join(__dirname,"manifest.json"));
});


app.get("/sw.js", function(req, res){
    res.header("Content-Type", "text/javascript");
    res.sendFile(path.join(__dirname,"sw.js"));
});

app.get("/loader.js", function(req, res){
    res.header("Content-Type", "text/javascript");
    res.sendFile(path.join(__dirname,"loader.js"));
});

module.exports = app;