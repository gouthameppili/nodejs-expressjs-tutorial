// const express = require('express');
// const app = express();

// const fs = require('fs');
// const { text } = require('stream/consumers');

// const port = 5000;

// const aboutPage = fs.readFileSync('./navbar-app/index.html');

// app.get('/', (req, res) => {
//     console.log(req.method);
//     res.status(200).send('hello world!')
// })

// app.get('/about', (req, res) => {
//     res.status(200).send('about page');
// })

// app.use((req, res) => {
//     res.status(404).send('<h1> Resource not Found </h1>');
// })

// app.get('/about', (req,res) => {
//     const url = req.url;
//     if(url === '/about'){
//         res.writeHead(200, {"content-type" : 'text/html'});
//         res.write(aboutPage);
//         res.end();
//     }
// })

// app.listen(port, () => {
//     console.log(`server running on ${port}`)
// })


const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

app.use(express.static('./navbar-app'));


// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// })

app.use((req, res) => {
    res.status(404).send('<h1>not found</h1>');
})


app.listen(port, (req,res) => {
    console.log(`server listening on ${port}`);
})