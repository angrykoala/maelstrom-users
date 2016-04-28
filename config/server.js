//Users server configuration

var bodyParser = require('body-parser');

module.exports = {
	port: process.env.PORT || 8081, //server port
	secret: process.env.SECRET || "dontpanic42", //secret
	tokenExpire: "30 days", //token expiration time (in seconds)
	//setups basic server (sets bodyparser)
	setup: function(app) {
		app.use(bodyParser.json()); // get information from body
		app.use(bodyParser.urlencoded({
			extended: true
		}));
		app.use('/', function(req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
			next();
		});
	}
};