const userModel = require('../models/userModel');
const jwt = require("jsonwebtoken");
const blackTokenModel = require('../models/blacklistedTokenModel');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized user" });
    }

    const isBlack = await blackTokenModel.findOne({ token: token });

    if (isBlack) {
        return res.status(401).json({ message: "Unauthorized user" });
    }


    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;

        return next();

    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}