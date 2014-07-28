var express = require("express");
var app = express();

/*app.set("view engine", "html");
app.set("views", __dirname + "views");
app.set("view options", {layout: false});*/

app.use(express.static(__dirname + "/public/css"));

app.get("/", function(req, res) {
	res.sendfile("./views/Home/index.html");
});

app.listen(3000);