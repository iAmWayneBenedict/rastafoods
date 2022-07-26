const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/usersRoutes");
const app = express();
require("dotenv").config();
app.use(express.json());

// db connection

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`Listening on port ${process.env.PORT}`);
		});
	})
	.catch((err) => console.log(err));

// routes
app.use("/api/users", userRoutes);
