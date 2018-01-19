var express = require('express');
var app = express(); //creates an application for express to run 

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT);
