// build your server here and require it from index.js
const express = require("express");
// const cors = require('cors');
const helmet = require("helmet");

const projectRouter = require("./project/router");
// const resourceRouter = require("./resource/router");


const server = express();

//server.use(cors());
server.use(helmet());
server.use(express.json());


server.use("/api/projects", projectRouter);
// server.use("/api/resource", resourceRouter);

// server.get('/', (req, res)  => {
//  res.send('Wellcome to scrum master')
//});


module.exports = server;




