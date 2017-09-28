// let Db = require("../models/database.js");

module.exports = (app, pool) => {
	app.get("/", (req, res, next) => {
		res.render("client/home", {data: "Da chay server, đây là client"});
	});
}