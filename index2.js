const http = require('http');

const app = {}

app.config = {
    port: 3009
}

app.createServer = () =>{
    const server = http.createServer(app.handelReqRes);
    server.listen(app.config.port);
}

app.handelReqRes = (req, res) => {
    res.end(`create server by node js`);
}

app.createServer()