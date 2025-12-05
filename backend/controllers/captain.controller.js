const captainModel = require("../models/captainModel");
const { findOne } = require("../models/userModel");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator")

module.exports.registerCaptain = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }

    const { fullname, email, password, vehicle } = req.body;

    const duplicate = await captainModel.findOne({ email });

    if (duplicate) {
        return res.status(401).json({ message: 'This email is already exists' });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email: email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain });
}

