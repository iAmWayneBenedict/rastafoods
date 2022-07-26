const { ObjectId } = require("mongodb");
const Users = require("../models/users");
const createUserToken = require("../tokens/createUserToken");

const getAllUsers = (req, res) => {
	Users.find()
		.sort({ name: 1 })
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log("Could not fetch data" + err);
		});
};

const getUser = (req, res) => {
	console.log(req.params.id);
	if (ObjectId.isValid(req.params.id)) {
		Users.findById(ObjectId(req.params.id))
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

const deleteUser = (req, res) => {
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

const loginUser = (req, res) => {
	res.json({ msg: "Login" });
};

module.exports = {
	getAllUsers,
	getUser,
	addUser,
	deleteUser,
};
