const express = require("express");

const express = express ();

app.get("/", (req,res) => {
    db.workout.find({}, (err, data) => {
        err ? console.log(err) : res.json(data);
    });
});