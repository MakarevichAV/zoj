const mongoose = require('mongoose');

const FoodDairy = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    userDate: {
        type: String,
        required: true,
    },
    dish: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true
    },
    calories: {
        type: String,
        required: true,
    },
    protein: {
        type: String,
        required: true,
    },
    fats: {
        type: String,
        required: true,
    },
    carbohydrates: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('diaries', FoodDairy);