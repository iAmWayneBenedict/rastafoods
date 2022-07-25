const express = require("express");
const router = express.Router();

// user controller
const { getAllUsers, getUser, addUser, deleteUser } = require("../controllers/userController");

router.route("/").get(getAllUsers).post(addUser);

router.route("/:id").get(getUser).delete(deleteUser);

module.exports = router;
