var express = require('express');
var router = express.Router();


const users = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob', age: 34 },
  { id: 3, name: 'Charlie', age: 22 },
  { id: 4, name: 'David', age: 30 },
  { id: 5, name: 'Eve', age: 27 },
  { id: 6, name: 'Frank', age: 31 },
  { id: 7, name: 'Grace', age: 25 },
  { id: 8, name: 'Hannah', age: 29 },
  { id: 9, name: 'Ian', age: 33 },
  { id: 10, name: 'Jane', age: 26 },
  { id: 11, name: 'Kevin', age: 32 },
  { id: 12, name: 'Laura', age: 24 },
  { id: 13, name: 'Mike', age: 35 },
  { id: 14, name: 'Nina', age: 23 },
  { id: 15, name: 'Oscar', age: 36 }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
