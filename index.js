// start your server here
const server = require("./api/server");

const HOST = "localhost";
const PORT = 9000;

// console.log('Hello Dan')

server.listen(PORT, () => console.log(`Server running at ${HOST}:${PORT}`));
