/**
 * 1. create server
 * 2. get full url
 * 3. get path name
 * 4. get query string
 * 5. get method
 * 6. get headers information
 * 7. get body data or information
 */

// import required module
const http = require('http');
const {handelReqAndRes} = require('./helpers/handleReqRes');
const env = require('./helpers/environment');

// app module or scaffolding
const app = {};


// create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Node js server run at ${app.config.port} port`)
    });

};

// handle request and response
// handle request and response
app.handleReqRes = handelReqAndRes;

// console.log(url);

app.createServer();