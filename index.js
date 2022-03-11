const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World 12345')
})

app.get('/kb', function (req, res) {
    res.send('it kb')
})

app.post('/post', function(req, res) {
    res.send('post request')
})

app.listen(3000)
console.log('server listen 3000')