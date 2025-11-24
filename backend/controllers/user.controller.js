const userModel = require('../models/userModel');
// const blackTokenModel = require('../models/blacklistedTokenModel');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');


module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword
  });

  if(!user){
    return res.status(401).json({message:"Duplicate email found!"});
  }

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
}

