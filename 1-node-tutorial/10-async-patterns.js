// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.url == '/'){
//         res.end('home page');
//     }
//     else if (req.url == '/about'){
//         for(let i = 1; i < 300; i++){
//             for(let j = i; j < 100; j++){
//                 console.log(i);
//             }
//         }
//         res.end('about page');
//     }
//     else{
//         res.end('hello world');
//     }
// })


// server.listen(5000, () => {
//     console.log('server listening on 5000');
// })

// const http = require('http');

// const server = http.createServer((req, res) => {
//     // Log a message to your server's terminal every time a request comes in
//     console.log(`Request received for URL: ${req.url}`);
    
//     // Set the status code and headers
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
    
//     // End the response
//     res.end('hello world'); 
// });

// server.listen(5000, () => {
//     console.log('Server is listening on port 5000... 🚀');
// });


const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//         if(err) {
//             reject(err);
//         }
//         else{
//             resolve(data);        
//         }
//         })
//     })
// }


const start = async() => {
    try{
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result.txt', `This is awesome : ${first} ${second}`);
        console.log(first, second);
    }
    catch (error) {
        console.log(error);
    }
}

start();


// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));


