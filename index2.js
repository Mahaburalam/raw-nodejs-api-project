/**
 * 1. http -> to create server
 * 2. app object/ module scaffolding
 * 3. configuration
 * 4. create server
 *
 */

// get http
const http = require('http');
// console.log(http);

// app module
const app = {};

// config
app.config = {
    port: 3333
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handelReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`test server run`);
    });
    
};


// handel req, res 
app.handelReqRes = (req, res) => {
    res.end(`Welcome to node js environment!`);
}

// run the server
app.createServer();