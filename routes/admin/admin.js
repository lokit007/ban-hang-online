// let Db = require("../models/database.js");

module.exports = (app, pool) => {
	app.get("/admin", (req, res, next) => {
		res.send("Da chay server, đây là admin");
	});
}