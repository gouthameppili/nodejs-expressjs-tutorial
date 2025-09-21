const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url == '/'){
        res.end('welcome to our home page')
    }
    // console.log('server started');
    // res.write('welcome to our home page');
    // res.end()
    else if(req.url == '/about'){
        res.end('here is our short history');
    }
    else {
        res.end(`
        <h1>OOPS<h1>
        <a href="/">Backhome</a>
        `)
        }
    // else {
    //     res.end(`
    //         <h1>Oops!</h1>
    //         <p>We can't seem to find the page you are looking for.</p>
    //         <a href="/">Back Home</a>
    //     `);
    // }
})

server.listen(5000);