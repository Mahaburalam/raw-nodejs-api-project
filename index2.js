// include required module
const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder');
const { decode } = require('punycode');

// console.log(url);

// app module
const app = {};

// configuration
app.config = {
    port: 4000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`The service listening port is: ${app.config.port}`);
    });
}

// handel request and response 
app.handleReqRes = (req, res) => {
    // get url
    const parseUrl = url.parse(req.url, true);
    // console.log(parseUrl);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // get requested method
    const requestMethod = req.method.toLowerCase();
    //get param value
    const queryString = parseUrl.query;
    const headers = req.headers;

    // stream & buffer
    const decoder = new StringDecoder('utf-8');

    let realData = '';
    req.on('data', (buffer)=>{
        realData += decoder.write(buffer); 
    })

    req.on('end', ()=>{
        realData += decoder.end();
        console.log(realData)
        // handel response
        res.end("I'm new in node js platform");
    })
}

// start the server
app.createServer();