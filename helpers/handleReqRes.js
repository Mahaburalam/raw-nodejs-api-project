// import modules
const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../route.js')
const {fileNotFound} = require('../handler/routeHandler/notFoundRoute.js');
const {sampleAppRoute} = require('../handler/routeHandler/sampleRoute');

// app module or scaffolding
const handler = {};

// handle request and response
handler.handelReqAndRes = (req, res) => {

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
    const headersObject = req.headers;

    // create request properties object
    const requestProperties = {
        getFullUrl,
        pathName,
        trimmedPathName,
        getQueryString,
        getMethod,
        headersObject
    };

    // console.log(trimmedPathName);

    const chosenHandler = routes[trimmedPathName] ? sampleAppRoute : fileNotFound;

    chosenHandler(requestProperties, (statusCode, payload) => {
        // console.log("hjbgdfhg")
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    // get body data
    // create an object of class
    const decodeString = new StringDecoder('utf-8');
    let storeData= '';

    // string or data write
    req.on('data', (buffer) => {
        storeData += decodeString.write(buffer);
    });

    // end process
    req.on('end', () => {
        storeData += decodeString.end();
        console.log(storeData);
        res.end(`Node js api development`);
    })
    
    // Define routes based on URL and method

    // if (req.url === '/' && req.method === 'GET') {
    //     res.end('Home Page');
    // } else if (req.url === '/about' && req.method === 'GET') {
    //     res.end('About Page');
    // } else if (req.url === '/contact' && req.method === 'GET') {
    //     res.end('Contact Page');
    // } else {
    //     res.writeHead(404);
    //     res.end('404 Not Found');
    // }
    
    // console.log(data);
};

module.exports = handler;