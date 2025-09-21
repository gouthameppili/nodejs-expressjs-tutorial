const express = require('express');
const app = express();
// let { people } = require('./data');

const people = require('./final/routes/people');
const auth = require('./final/routes/auth');

app.use(express.static('./methods-public'));

app.use(express.urlencoded( { extended : false}))

app.use(express.json());

app.use('/api/people', people);
app.use('/login', auth);

// app.post('/login', (req, res) => {
//     const { name } = req.body;
//     if(name) {
//         return res.status(200).send(`Welcome ${name}`);
//     }
//     console.log(req.body);
//     // res.send('POST ')
//     res.status(401).send('Please provide details');
// })




app.listen(5000, () => {
    console.log('server runnning on 5000...');
})