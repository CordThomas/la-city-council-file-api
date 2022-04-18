// Create express app
// https://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express
const express = require("express"),
    bodyParser = require("body-parser"),
    swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUI = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json'),
    app = express();

module.exports = app;

// Server port
const HTTP_PORT = 8888;

app.use(bodyParser.json());

let caRoutes = require('./routes/councilactions');
let cdRoutes = require('./routes/councildocuments');
let cfRoutes = require('./routes/councilfiles');
let cmRoutes = require('./routes/councilmembers');
let ltRoutes = require('./routes/legislativetopics');
let cvRoutes = require('./routes/councilvotes');
let cvrRoutes = require('./routes/councilvoteresults');
app.use("/api/councilactions", caRoutes);
app.use("/api/councildocuments", cdRoutes);
app.use("/api/councilfiles", cfRoutes);
app.use("/api/councilmembers", cmRoutes);
app.use("/api/legislativetopics", ltRoutes);
app.use("/api/councilvotes", cvRoutes);
app.use("/api/councilvoteresults", cvrRoutes);

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocument, {explorer: true})
);

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});