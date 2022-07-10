"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// this has an experimental flag in JS
// but actually we are using TS here, which is translated
/*
  const express = require('express');
  // require() exist in node but not browser,
  // but it is regular common JS import syntax, which node used by default.
*/
/*
  'tsc -w' : to see code generated in the ./dist
  to use nodemon :
    "scripts": {
      ...
      "start": "nodemon dist/app.js"
  },
*/
// parse the body of the incoming req, and find json data
// populate body key object with that parsed json data
const body_parser_1 = require("body-parser");
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/todos', todos_1.default);
/*
app.get('/', function (req, res) {
  res.send('Hello World!')
})
*/
// error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});
