const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "first name should be at least 3 character long"],
        },
        lastname: {
            type: String,
            minlength: [3, "last name should be at least 3 character long"],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter valid email"]
    },
    password: {
        type: String,
        required: true,
        minlenghth: [6, "password should be 6 character long"],
        select: false,
    },
    soketId: {
        tyep: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'color must be at least 3 characters long']
        },
        plate: {
            type: String,
            required: true,
            minlength: [6, 'plate must be at least 6 characters long']
        },
        capacity: {
            type: Number,
            required: true,
            minlength: [1, 'capacity must be at least 1 person']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        },
    },
    location: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    }

})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);
module.exports = captainModel;
