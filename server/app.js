const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/usersRoutes");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// db connection
//mongoose
//	.connect(process.env.MONGODB_URI)
//	.then(() => {
//		app.listen(process.env.PORT, () => {
//			console.log(`Listening on port ${process.env.PORT}`);
//		});
//	})
//	.catch((err) => console.log(err));

const mongooseConnect = async () => {
	try {
		const response = await mongoose.connect(process.env.MONGODB_URI);
		const listen = await app.listen(process.env.PORT, () => {
			console.log(`Listening on port ${process.env.PORT}`);
		});
	} catch (err) {
		console.log(err);
	}
};

mongooseConnect();

// const mailjet = require("node-mailjet").apiConnect(
// 	"12785396c82c28df8ab44e9d37468b46",
// 	"846f9d19ae4e4abcc63271f50549f027"
// );
// const request = mailjet.post("send", { version: "v3.1" }).request({
// 	Messages: [
// 		{
// 			From: {
// 				Email: "wayne.benedict.iraola@outlook.com",
// 				Name: "RastaFoods",
// 			},
// 			To: [
// 				{
// 					Email: "iraolawayne@gmail.com",
// 					Name: "Wayne",
// 				},
// 			],
// 			Subject: "Greetings from Mailjet.",
// 			TextPart: "My first Mailjet email",
// 			HTMLPart:
// 				"<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
// 			CustomID: "AppGettingStartedTest",
// 		},
// 	],
// });
// request
// 	.then((result) => {
// 		console.log(result.body);
// 	})
// 	.catch((err) => {
// 		console.log(err.statusCode);
// 	});

// routes
app.use("/api/users", userRoutes);
