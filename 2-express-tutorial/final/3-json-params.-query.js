const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     res.json(
//         [{name: 'john'}, {age: 16}]
//     );
// })

// app.get('/', (req, res) => {
//     res.json({products});
// })


const {products} = require('./data.js');

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1> <a href="/api/products">products</a>');
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    })
    res.json(newProducts);
})



app.get('/api/products/:productID', (req, res) => {
    // // console.log(req);
    // console.log(req.params)
    const { productID } = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID))
    // res.json(singleProduct);

    if(!singleProduct) {
        return res.status(404).send('Product Does Not Exist');
    }

    res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world');
})


app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts.length < 1){
        // return res.status(200).send('no product');
        return res.status(200).json({success : true, data : []});
    }
    return res.status(200).json(sortedProducts);
    // res.send('hello world');
})


app.listen(5000, () => {
    console.log('server started listening on 5000....');
})


// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1)
//     res.json(singleProduct);
// })

// app.get('/api/products/2', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 2)
//     res.json(singleProduct);
// })

// app.get('/api/products/3', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 3)
//     res.json(singleProduct);
// })


