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
		contact: {
			type: Number,
		},
		username: {
			type: String,
			required: true,
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
		address: {
			region: {
				name: {
					type: String,
				},
				code: {
					type: String,
				},
			},
			province: {
				name: {
					type: String,
				},
				code: {
					type: String,
				},
			},
			city: {
				name: {
					type: String,
				},
				code: {
					type: String,
				},
			},
			barangay: {
				type: String,
			},
			street: {
				type: String,
			},
		},
	},
	{ timestamps: true }
);

// statics
usersSchema.statics.signup = async function (user) {
	const { email, password, username } = user;
	const { firstName, lastName } = user.name;
	const emailExists = await this.findOne({ email });
	const userNameExists = await this.findOne({ username });

	if (!email || !password || !firstName || !lastName || !username) {
		throw Error("All fields must be filled");
	}

	if (emailExists) {
		throw Error("Email already exist");
	}
	if (userNameExists) {
		throw Error("UserName already exist");
	}

	if (password.length < 8) {
		throw Error("Password must be at least 8 characters");
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

usersSchema.statics.login = async function (email, password) {
	if (!email || !password) {
		throw Error("All fields must be filed");
	}

	if (password.length < 8) {
		throw Error("Password must be at least 8 characters");
	}

	const user = await this.findOne({ email });

	if (!user) {
		throw Error("Incorrect email or password");
	}

	const isPasswordMatched = await bcrypt.compare(password, user.password);

	if (!isPasswordMatched) {
		throw Error("Incorrect email or password");
	}

	return user;
};

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;
