'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/:user/:location', (req, res) => {
  res.append('User', req.params.user);
  res.append('Location', req.params.location);
  res.append('Server', req.params.user);
  res.send(`Hello, ${req.params.user} from ${req.params.location}`);
});

var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
