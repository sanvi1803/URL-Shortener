const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, // This option automatically adds `createdAt` and `updatedAt` fields
    }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
