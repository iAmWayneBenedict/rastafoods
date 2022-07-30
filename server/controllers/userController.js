const { ObjectId } = require("mongodb");
const Users = require("../models/users");
const createUserToken = require("../tokens/createUserToken");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
		Users.findById({ _id: decoded._id })
			.then((result) => {
				let { name, email, username, address, contact } = result;
				res.status(200).json({ name, email, username, address, contact });
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

const updateUser = (req, res) => {
	let decoded = jwt.verify(req.params.token, process.env.SECRET_KEY);
	let data = req.body;
	const user = {
		name: {
			firstName: data.firstName,
			lastName: data.lastName,
		},
		username: data.username,
		contact: data.contact,
		address: {
			region: {
				name: data.region,
				code: data.regionCode,
			},
			province: {
				name: data.province,
				code: data.provinceCode,
			},
			city: {
				name: data.city,
				code: data.cityCode,
			},
			barangay: data.barangay,
			street: data.street,
		},
	};
	if (ObjectId.isValid(decoded._id)) {
		Users.findByIdAndUpdate({ _id: decoded._id }, user)
			.then((result) => {
				res.status(200).json(result);
			})
			.catch((err) => {
				console.log("Could not fetch data" + err);
			});
	} else {
		res.status(500).json({ error: "Could not fetch data" });
	}
};

const updateUserPassword = (req, res) => {
	let decoded = jwt.verify(req.params.token, process.env.SECRET_KEY);
	let data = req.body;
	// console.log(data);

	if (ObjectId.isValid(decoded._id)) {
		Users.findById(decoded._id).then(async (result) => {
			// console.log(result);
			if (
				data.currentPassword.length < 8 ||
				data.newPassword.length < 8 ||
				data.confirmPassword.length < 8
			) {
				res.status(400).json({ error: "Password must be at least 8 characters" });
			} else {
				const isPasswordMatched = await bcrypt.compare(
					data.currentPassword,
					result.password
				);
				if (!isPasswordMatched) {
					res.status(400).json({ error: "Current password not match" });
				} else if (data.newPassword !== data.confirmPassword) {
					res.status(400).json({ error: "New password not match" });
				} else {
					const salt = await bcrypt.genSalt(10);
					data.newPassword = await bcrypt.hash(data.confirmPassword, salt);
					Users.findByIdAndUpdate({ _id: decoded._id }, { password: data.newPassword })
						.then((result) => {
							res.status(200).json({ success: "Password successfully updated" });
						})
						.catch((err) => {
							console.log("Could not fetch data" + err);
						});
				}
			}
		});
	} else {
		res.status(500).json({ error: "Could not fetch data" });
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
	updateUser,
	updateUserPassword,
};
