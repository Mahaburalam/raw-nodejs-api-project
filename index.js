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
const environment = require('./helpers/env');
// console.log(environment);

// app module or scaffolding
const app = {};


// create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.staging.port, () => {
        // console.log(`get variable value when run node js project: ${process.env.env_name}`);
        console.log(`Node js server run at ${environment.staging.port} port`)
    });
};

// handle request and response
// handle request and response
app.handleReqRes = handelReqAndRes;

// console.log(url);

app.createServer();

