// const express = require('express')
import createApplication from 'express'
const app = createApplication()

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

app.get('/', function (req, res) {
    let a: string = 'hi'
    let greeter = new Greeter(a)
    res.send(greeter.greet())
})

app.get('/kb', function (req, res) {
    res.send('it kb')
})

app.post('/post', function(req, res) {
    res.send('post request')
})

app.listen(3000)
console.log('server listen 3000')