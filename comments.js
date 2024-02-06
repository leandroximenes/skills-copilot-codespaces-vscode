// Create web server
// 1. Import express
// 2. Create an instance of express
// 3. Create a route for GET /comments
// 4. Create a route for POST /comments
// 5. Start the server

const express = require('express');
const app = express();
app.use(express.json());

let comments = {
  1: 'First comment!',
  2: 'Second comment!',
  3: 'Third comment!',
};

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { comment } = req.body;
  const id = Object.keys(comments).length + 1;
  comments[id] = comment;
  res.json({ id, comment });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// 6. Test the server
// 7. Use Postman to test the server

// Path: index.js
// 8. Import express
// 9. Create an instance of express
// 10. Create a route for GET /
// 11. Start the server

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// 12. Test the server
// 13. Use Postman to test the server

// Path: index.js
// 14. Create a route for GET /comments
// 15. Use request module to make a GET request to the server
// 16. Use request module to make a POST request to the server

const express = require('express');
const request = require('request');
const app = express();

app.get('/comments', (req, res) => {
  request('http://localhost:3000/comments', (err, response, body) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(JSON.parse(body));
  });
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});

// 17. Test the server
// 18. Use Postman to test the server

// Path: index.js