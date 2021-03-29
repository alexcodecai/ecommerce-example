const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },
  {
    name: "John Snow",
    email: "JohnSnow@example.com",
    password: bcrypt.hashSync("123456", 10)
  },
  {
    name: "Ted Stark",
    email: "TedStark@example.com",
    password: bcrypt.hashSync("123456", 10)
  }
];

module.exports = users;
