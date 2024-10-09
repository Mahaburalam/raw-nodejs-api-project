// import modules
const url = require('url');
const {StringDecoder} = require('string_decoder');

// app module or scaffolding
const handler = {};

// handle request and response
handler.handelReqRes = (req, res) => {

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
    
    
    // console.log(data);
};

module.exports = handler;