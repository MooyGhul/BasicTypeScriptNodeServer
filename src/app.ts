import express, { Request, Response, NextFunction } from 'express';
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
import { json } from 'body-parser';

import todoRoutes from './routes/todos';

const app = express();

app.use(json());

app.use('/todos', todoRoutes);
/*
app.get('/', function (req, res) {
  res.send('Hello World!')
})
*/

// error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({message:err.message});
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})


