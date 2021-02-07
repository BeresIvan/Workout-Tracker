const express = require("express");
const { Workout } = require("../models");
module.exports = (app) => {
app.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

app.put("/api/workouts/:id", ( req , res) => {
    console.log(req.body)
    console.log(req.params.id)
    Workout.findByIdAndUpdate( req.params.id,
        { $push: { exercises: req.body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

app.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .limit(10)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

app.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndRemove(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


};
