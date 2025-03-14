// build your server here and require it from index.js
const express = require("express");
const server = express();
// const cors = require('cors');
const helmet = require("helmet");

const projectRouter = require("./project/router");
// const resourceRouter = require("./resource/router");

//server.use(cors());
server.use(helmet());
server.use(express.json());


server.use("/api/projects", projectRouter);
// server.use("/api/resource", resourceRouter);

// server.get('/', (req, res)  => {
//  res.send('Wellcome to scrum master longe')
//});
server.use((err, res, req, next) => { // eslint-disable-line
  res.status(500).json({
    message:err.message
  });
});

module.exports = server;




