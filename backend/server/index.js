const server = require('./www/bin/app.js');
const localPort = 4465;

require('dotenv').config();

server.listen(localPort, () => {
  console.log(`Your local server is now running on port: ${localPort}`)
});
