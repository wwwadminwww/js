const http = require('http');
const PORT = 5555;
http.createServer((req, res) => {
    res.end('Hello world');
    console.log(req.url);
}).listen(PORT, ()=> console.log('Is work'));