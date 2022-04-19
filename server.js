
// Use Express
var express = require("express");
// Use body-parser
var bodyParser = require("body-parser");
//const { addSyntheticLeadingComment } = require("typescript");

// Create new instance of the express server
var app = express();

// Define the JSON parser as a default way 
// to consume and produce data through the 
// exposed APIs
app.use(bodyParser.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Init the server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/api/status", function (req, res) {
    res.status(200).json({ status: "UP" });
});

app.post("/api/levers", function (req, res) {
    console.log("req = ", req.body);
    if ((req.body[0] === 'down') && 
       (req.body[1] === 'down') &&
       (req.body[2] === 'up') &&
       (req.body[3] === 'down') &&
       (req.body[4] === 'up') &&
       (req.body[5] === 'down') &&
       (req.body[6] === 'down') &&
       (req.body[7] === 'up')) {
            res.status(200).json(true);
       } else {
            res.status(200).json(false);

       }
});