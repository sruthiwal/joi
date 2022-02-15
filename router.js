const express = require('express');
const router = express.Router();
const validation = require('./validation')
const {
  validate
} = require('./validationmiddleware')
router.post("/",validate(validation.person), (req, res) => {
  res.send("request processed");
});
//router.get("/person",(validation.person));
module.exports=router;