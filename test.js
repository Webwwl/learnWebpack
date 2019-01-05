let http = require('http')

let server = http.createServer( (req, res) => {
    res.end('hello')
})

server.listen(8899, () => console.log('listen... 8899 '))