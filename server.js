const express = require("express");

//Express SetUp
const app = express();
let PORT = process.env.PORT || 8000;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./apiRouts")(app);
require("./htmlRouts")(app);

//Start Server
app.listenerCount(PORT, function () {
    console.lot("App listening on PORT " + PORT)
});