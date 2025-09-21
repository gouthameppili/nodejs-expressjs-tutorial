// console.log('first task');
// setTimeout(() => {
//     console.log('second task')
// }, 0);
// console.log('new task');

// console.log('First');
// setTimeout(() => console.log('Third'), 0);
// Promise.resolve().then(() => console.log('Second'));
// console.log('Fourth');

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request server');
    res.end('hello world');
})

server.listen(5000, () => {
    console.log('server listening on port : 5000.....');
})

