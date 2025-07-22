const express = require('express');

const app = express();

//Route
app.get('/', (req, res) => {
  // Can only use res.send() once per request
  res.send('Hello, World!!');
});

//Route with a parameter, {*whatever} if I want a placeholder for any value
app.get('/:username/', (req, res) => {
  console.log(req.params); // { username: 'dylan' }
  console.log(req.query); // { query: 'value' } if there are query parameters (?)
  res.send(`Hello, ${req.params.username}!`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
