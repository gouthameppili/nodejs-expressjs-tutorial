const http = require('http');
const fs = require('fs');
const { type } = require('os');


// const homePage = fs.readFileSync('./index.html');


const homePage = fs.readFileSync('./navbar-app/index.html');
const homeStyles = fs.readFileSync('./navbar-app/styles.css');
const homeImage = fs.readFileSync('./navbar-app/logo.svg');
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    // console.log('user hit the server');
    // console.log(req.url);
    // console.log(req.method);
    console.log(req.url);
    const url = req.url;
    if(url === '/'){
        // res.writeHead(200, {'content-type' : 'text/html'})
        // // res.write('<h1> Goutham </h1>');
        // res.write(homePage);
        // // fs.createReadStream('./index.html').pipe(res);
        // res.end();
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(homePage);
        res.end();
    }
    
    // else if(url === '/about'){
    //     res.writeHead(200, {'content-type' : 'text/html'})
    //     res.write('<h1> Goutham is good boy </h1>');
    //     res.end();
    // }

    //styles
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type' : 'text/css'});
        res.write(homeStyles);
        res.end();
    }

    //logo
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type' : 'image/svg+xml'});
        res.write(homeImage);
        res.end();
    }
    
    //js
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type' : 'text/js'});
        res.write(homeLogic);
        res.end();
    }
    else{
        res.writeHead(400, {'content-type' : 'text/html'})
    res.write('<h1> page not about </h1>');
    res.end();
    }
    
})

server.listen(5000)


// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/' && req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Welcome to the homepage!');
//   } else if (req.url === '/api/data' && req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     const data = { message: 'This is some API data' };
//     res.end(JSON.stringify(data));
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Page Not Found');
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });