/**
    Title: Uptime Monitoring Application
    Description: A restful API to monitor up or down time of user defined links
*/

// dependencies
const http = require('http');
const url = require('url');
// console.log(http);

// app object - module scaffolding
const app = {}; //

// configuration
app.config = {
    port: 3000
};

// create server
app.createServer = () => {
    const server = http.createServer( app.handleReqRes );
    server.listen(app.config.port, () => {
        console.log(`Listening to port $  {app.config.port}`);
    });
}

// handle request response
app.handleReqRes = (req, res) => {
    // request handle
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname; // if pass param or any special symbol in url not showing in console
    const trimmedPath = path.replace(/^\/+|\/+$/g, ''); //if pass any special symbol in url not showing in console

    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query; // received or show params value as an object
    const headerObject = req.headers; // show all header information
    // console.log(headerObject);

    // response handle
    res.end('Hello developer!!');
};

// start the server
app.createServer();
