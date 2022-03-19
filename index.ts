// const express = require('express')
// import createApplication from 'express'
// const app = createApplication()
import ExpressMaker from './lib/ExpressMaker'
import Greeter from './app/models/Greeter'
const app = (new ExpressMaker()).app



// app.get('/', function (req, res) {
//     let a = 'hi'
//     let greeter = new Greeter(a)
//     res.send(greeter.greet())
// })


app.listen(3000)
console.log('server listen 3000')