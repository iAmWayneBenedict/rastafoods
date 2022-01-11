const express = require("express");
const app = express();

app.listen(8000);

app.get("/", (req, res) => {
	res.send("");
});
