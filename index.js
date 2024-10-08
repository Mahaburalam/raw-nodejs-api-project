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
const url = require('url');
const {StringDecoder} = require('string_decoder')

// app module or scaffolding
const app = {};

// configuration
app.config = {port:3000};

// create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Node js server run at ${app.config.port} port`)
    });

};

// handle request and response
app.handleReqRes = (req, res) => {

    // get full url
    const getFullUrl = url.parse(req.url, true);

    // get path name
    const pathName = getFullUrl.pathname;

    // pares path name
    const trimmedPathName = pathName.replace(/^\/+|\/+$/g,'');
    // console.log(pathName, trimmedPathName);

    // get query string or param value
    const getQueryString = getFullUrl.query;
    // console.log(getQueryString);

    // get method name
    const getMethod = req.method.toLowerCase();
    // console.log(getMethod);

    // get headers information
    const headers = req.headers;
    // console.log(req);
    

    // get body data
    // create an object of class
    const data = new StringDecoder('utf-8');
    
    // console.log(data);
    res.end(`Node js is awesome and power full..`);
};

// console.log(url);

app.createServer();