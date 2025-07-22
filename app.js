const express = require('express');

const app = express();

//Route
app.get('/', (req, res) => {
  // Can only use res.send() once per request
  res.send('Hello, World!!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
