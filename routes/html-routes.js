const path = require('path');

const express = require("express");

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.SendFile(path.join(_dirname, "../public/index.html"));
    });

    app.get("/excercise", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html"))
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(_dirname, "../public/stats.html"))
        });

};