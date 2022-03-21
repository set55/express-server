"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
// import createApplication from 'express'
// const app = createApplication()
// import ExpressMaker from './lib/ExpressMaker'
const express_base_1 = __importDefault(require("@set55605/express-base"));
const route_1 = __importDefault(require("./route"));
const app = (new express_base_1.default()).app;
app.use(route_1.default);
// app.get('/', function (req, res) {
//     let a = 'hi'
//     let greeter = new Greeter(a)
//     res.send(greeter.greet())
// })
app.listen(3000);
console.log('server listen 3000');
