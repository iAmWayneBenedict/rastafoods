const jwt = require("jsonwebtoken");
require("dotenv").config();

const createUserToken = (_id) => {
	return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1w" });
};

module.exports = createUserToken;
