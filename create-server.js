// required module
const http = require('http');
const url = require('url');

// app module
const app = {};

// config file
app.config = {
    port: 3232
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handelReqRes);
    server.listen(app.config.port, () => {

    })
}

// handle request and response
app.handelReqRes = (req, res) => {

    // request handle
    // get url
    const getFullUrl = url.parse(req.url, true);
    const pathName = getFullUrl.pathname;
    const path = getFullUrl.path;
    const trimmedPath = pathName.replace(/^\/+|\/+$/g, '');
    // console.log(trimmedPath);

    //get method name
    const method = req.method.toLowerCase();
    // get param value in object
    const getParamValueObj = getFullUrl.query;

    // header or request meta data
    const headerOrMetaData = req.headers;

    console.log(headerOrMetaData) 

    // response handle
    res.end(`node js..`)
}

// call server
app.createServer();