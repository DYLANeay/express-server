const express = require('express');

const app = express();
const authorRouter = require('./routes/authorRouter');

app.use('/authors', authorRouter); // Use the authorRouter for routes starting with /authors

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

app.use((req, res, next) => {
  throw new Error('OH NO!');
  // or next(new Error("OH NO!"));
});

app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
