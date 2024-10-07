/**
 * create server
 * 
 */

// import required modules
const http = require('http');

// app module or scaffolding
const app = {};

// configuration
app.config = {port: 3000};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () =>{
        console.log(`Node js server run in port : ${app.config.port}`);
    });

};

// handle request and response
app.handleReqRes = (req, res) => {
    res.end(`create node js server`);
}

app.createServer();