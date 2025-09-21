const http = require('http');
const server = http.createServer()
server.on('request', (req, res) => {
    res.end('welcome');
})
server.listen(5000);

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} ${id}`)
})

customEmitter.on('response', () => {
    console.log(`data different`)
})

customEmitter.emit(`response`, 'john', 35)
