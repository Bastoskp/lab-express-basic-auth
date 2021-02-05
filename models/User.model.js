// User model here
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema (
    {
        username: {
            type: String,
            trim: true,
            require: [true, 'Username is required.'],
            unique: true
        },
        passwordHash: {
            type: String,
            require:[true, 'Password is required.']
        }
    }
    {
        timestamps: true
    }
);

module.export = model('User', userSchema);