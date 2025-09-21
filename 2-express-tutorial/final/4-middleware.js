// const express = require('express');
// const app = express();

// // req => middleware => res

// // const logger = (req, res, next) => {
// //     const method = req.method;
// //     const url = req.url;
// //     const time = new Date().getFullYear();
// //     console.log(method, url, time);
// //     // res.send('Testing');
// //     next()
// // }

// app.get('/', logger, (req, res, ) => {
    
//     res.send('home');
// })

// app.get('/about', logger, (req, res) => {
//     res.send('about');
// })

// app.listen(5000, () => {
//     console.log('server is listening on port 5000...')
// })

// using app.use();

// const express = require('express');
// const app = express();
// const logger = require('./logger');

// // app.use(logger);
// app.use('/api', logger);

// app.get('/', (req, res) => {
//     res.send('Home');
// })

// app.get('/about', (req, res) => {
//     res.send('About');
// })

// app.get('/api/products', (req, res) => {
//     res.send('products');
// })

// app.get('/api/items', (req, res) => {
//     res.send('items');
// })
// app.listen(5000, () => {
//     console.log('server listening on 5000...');
// })


const express = require('express');
const app = express();
const logger = require('./logger');
const authorise = require('./authorise');

// app.use([logger, authorise]);
// app.use('/api', logger);
app.use(logger);
app.use('/api', authorise);

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.get('/api/products', (req, res) => {
    res.send('products');
})

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('items');
})

// app.get('/api/items',[logger, authorise], (req, res) => {
//     console.log(req.user);
//     res.send('items');
// })

app.listen(5000, () => {
    console.log('server listening on 5000...');
})
