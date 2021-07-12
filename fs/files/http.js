const fs = require('fs')
const server = require('http').createServer()
const data = {}
// server: http.Server

server.on('request', (req, res) => {
    // req: http.IncomingMessage
    // res: http.ServerResponse
    console.log(req.url)
    // handle routes
    switch (req.url) {
        case '/api':
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(data))        
            break
        case '/home':
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(fs.readFileSync(`.${req.url}.html`))        
            break;
        case '/':
            res.writeHead(301, {'Location': '/home'})
            res.end()
            break
        default:
            res.writeHead(404)
            res.end()
            break;
    }


    // setTimeout(function () {
    //     res.write('Another Hello world\n')
    // }, 10000)
    // setTimeout(function () {
    //     res.write('Yet Another Hello world\n')
    // }, 20000)  
    // setTimeout(function (){
    //     res.write('Ain\'t gonna happen\n')
    // }, 130000)//after default server timeout(2s)
})

server.timeout = 1000
server.listen(8000)
