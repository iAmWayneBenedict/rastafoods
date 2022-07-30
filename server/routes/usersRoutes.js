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
	loginUser,
	updateUser,
	updateUserPassword,
} = require("../controllers/userController");

router.route("/").get(getAllUsers).post(addUser);

router.route("/:id").get(getUserById).delete(deleteUserById);

router.route("/token/:token").get(getUserByToken).delete(deleteUserByToken);

router.route("/token/:token/edit-profile").put(updateUser);

router.route("/token/:token/edit-password").put(updateUserPassword);

router.route("/signup").post(addUser);

router.route("/login").post(loginUser);

module.exports = router;
