const express = require("express");
const router = express.Router();

// user controller
const {
	getAllUsers,
	getUserById,
	getUserByToken,
	addUser,
	deleteUserById,
	deleteUserByToken,
} = require("../controllers/userController");

router.route("/").get(getAllUsers).post(addUser);

router.route("/:id").get(getUserById).delete(deleteUserById);

router.route("/token/:token").get(getUserByToken).delete(deleteUserByToken);

router.route("/signup").post(addUser);

module.exports = router;
