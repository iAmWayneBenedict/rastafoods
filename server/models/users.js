const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: [8, "Password too short!"],
		},
		name: {
			firstName: {
				type: String,
				required: true,
			},
			lastName: {
				type: String,
				required: true,
			},
		},
	},
	{ timestamps: true }
);

// statics
usersSchema.statics.signup = async function (user) {
	const { email, password } = user;
	const { firstName, lastName } = user.name;
	const exists = await this.findOne({ email });

	if (exists) {
		throw Error("Email already exist");
	}

	if (password < 8) {
		throw Error("Password length must be greater than 8");
	}

	if (!email || !password || !firstName || !lastName) {
		throw Error("All fields must be filled");
	}

	if (!validator.isEmail(email)) {
		throw Error("Email is not valid");
	}

	// if (!validator.isStrongPassword(password)) {
	// 	throw Error("Password not strong enough");
	// }

	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(password, salt);

	const newUser = await this.create(user);

	return newUser;
};

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;
