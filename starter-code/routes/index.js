const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// ALEX INSERTED

// User model
const User           = require("../models/user");

// BCrypt to encrypt passwords

const bcrypt         = require("bcrypt");
// you need to sintall bcrypt as follows:: npm i bcrypt
const bcryptSalt     = 10;

router.post("/signup", (req, res, next) => {
  // const username and password here in index.js are linked with the index.hbs input name
  const username = req.body.username;
  const password = req.body.password;
  const salt     = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  User.create({
    username,
    password: hashPass
  })
  .then(() => {
    res.redirect("/");
  })
  .catch(error => {
    console.log(error);
  })
});

//






module.exports = router;
