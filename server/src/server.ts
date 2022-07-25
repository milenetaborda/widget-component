import express from 'express';

const app = express();

app.get('/users', (_, res) => {
  res.json([
    { name: 'John', age: 20 },
    { name: 'Bob', age: 30 }
  ]);
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
