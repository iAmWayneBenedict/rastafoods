const { ObjectId } = require("mongodb");
const Users = require("../models/users");

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

const addUser = (req, res) => {
	const user = req.body;

	const users = new Users(user);

	users
		.save()
		.then((result) => {
			res.status(201).json(result);
		})
		.catch((err) => {
			res.status(500).json({ error: "Could not fetch data" });
		});
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

module.exports = {
	getAllUsers,
	getUser,
	addUser,
	deleteUser,
};
