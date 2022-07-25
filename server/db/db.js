const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
	connectToDb: (callback) => {
		MongoClient.connect(
			"mongodb+srv://iAmWayne:thisiswayne@iamwayne.yzuab.mongodb.net/RastaFoods?retryWrites=true&w=majority"
		)
			.then((client) => {
				dbConnection = client.db();
				callback();
			})
			.catch((err) => {
				console.log(err);
				return callback(err);
			});
	},
	getDb: () => dbConnection,
};
