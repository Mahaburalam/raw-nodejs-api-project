/**
 * title:"Best practice",
 * description:"Test for me"
 */

// all dependencies
const http = require('http');
// console.log(http);

// app module 
const app = {

}

// configuration
app.config = {
    port : 3003
}

// create server
app.createServer = () =>{
    const server = http.createServer(app.handelReqRes);
    server.listen(app.config.port, () => {
        console.log(`${app.config.port}`)
    })

}

app.handelReqRes = (req, res) => {
    res.end("test")
}

app.createServer();