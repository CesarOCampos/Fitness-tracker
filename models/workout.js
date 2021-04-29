const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Enter your exercise",
        },
        type: {
            type: String,
            trim: true,
            required: "What type of exercise are you going to do?",
        },
        weight: {
            type: Number,
        },

        reps: {
            type: Number,
        },
        duration: {
            type: Number,
            required: "Amount of time in minutes exercised?",
        },
        distance: {
            type: Number,
        },
    }, ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;