const express = require("express");
const app = express();
const authrouter = require('./router');
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use('/', authrouter);
app.listen(3000, () => {
  console.log("Server Started");
});