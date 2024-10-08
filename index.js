// start your server here
const server = require('./api/server');

const port = 9000;

// console.log('welocome you!')

server.listen(port, () => { 
 console.log('listen on', port)
})


