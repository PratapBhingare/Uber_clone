const userModel = require("../models/userModel");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    throw new Error("Fields are Required!");
  }

  const duplicate = await userModel.findOne({ email: email });
  if (duplicate) {
    return null;
  }

  const user = userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};
