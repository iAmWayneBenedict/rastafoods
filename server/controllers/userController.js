const { ObjectId } = require("mongodb");
const Users = require("../models/users");
const createUserToken = require("../tokens/createUserToken");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const getAllUsers = (req, res) => {
	Users.find()
		.sort({ name: 1 })
		.then((result) => {
			result.map((obj) => {
				obj.password = "";
				return obj;
			});
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log("Could not fetch data" + err);
		});
};

const getUserById = (req, res) => {
	if (ObjectId.isValid(req.params.id)) {
		Users.findById(ObjectId(req.params.id))
			.then((result) => {
				let { name, email, username } = result;
				res.status(200).json({ name, email, username });
			})
			.catch((err) => {
				console.log("Could not fetch data" + err);
			});
	} else {
		res.status(500).json({ error: "Could not fetch data" });
	}
};

const getUserByToken = (req, res) => {
	let decoded = jwt.verify(req.params.token, process.env.SECRET_KEY);

	if (ObjectId.isValid(decoded._id)) {
		Users.findOne({ _id: decoded._id })
			.then((result) => {
				let { name, email, username } = result;
				res.status(200).json({ name, email, username });
			})
			.catch((err) => {
				console.log("Could not fetch data" + err);
			});
	} else {
		res.status(500).json({ error: "Could not fetch data" });
	}
};

const addUser = async (req, res) => {
	const { firstName, lastName, email, password, confirmPassword, dateNow } = req.body;
	if (password !== confirmPassword) {
		res.status(400).json({ error: "Password not matched" });
	} else {
		const user = {
			email,
			name: {
				firstName,
				lastName,
			},
			username: `@${firstName.toLowerCase()}${lastName.toLowerCase()}${dateNow}`,
			password,
		};
		try {
			const { email, name, _id, createdAt, updatedAt } = await Users.signup(user);

			const token = createUserToken(_id);
			res.status(200).json({ data: { email, name, _id, createdAt, updatedAt }, token });
		} catch (err) {
			res.status(400).json({ error: err.message });
		}
	}
};

const deleteUserById = (req, res) => {
	console.log(req.params.id);
	if (ObjectId.isValid(req.params.id)) {
		Users.findByIdAndDelete(ObjectId(req.params.id))
			.then((doc) => {
				res.status(200).json(doc);
			})
			.catch((err) => {
				console.log("Could not fetch data" + err);
			});
	} else {
		res.status(500).json({ error: "Could not fetch data" });
	}
};

const deleteUserByToken = (req, res) => {
	console.log(req.params.id);
	if (ObjectId.isValid(req.params.id)) {
		Users.findOneAndDelete(ObjectId(req.params.id))
			.then((doc) => {
				res.status(200).json(doc);
			})
			.catch((err) => {
				console.log("Could not fetch data" + err);
			});
	} else {
		res.status(500).json({ error: "Could not fetch data" });
	}
};

const loginUser = async (req, res) => {
	const { email: userEmail, password } = req.body;
	try {
		const { email, name, _id } = await Users.login(userEmail, password);

		const token = createUserToken(_id);
		res.status(200).json({ data: { email, name, _id }, token });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

module.exports = {
	getAllUsers,
	getUserById,
	getUserByToken,
	addUser,
	deleteUserById,
	deleteUserByToken,
	loginUser,
};
