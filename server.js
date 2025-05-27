const express = require('express');

const app = express();
const fs = require('fs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 4500;


app.get('/1234', (req, res) => {
    res.send('Hello World! 1234')
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})