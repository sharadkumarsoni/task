const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const userRoute = require('./routes/user');
const taskRoute = require('./routes/task');
const exportRoute = require('./routes/export');
const Connection = require('./db');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(userRoute)
app.use(taskRoute)
app.use(exportRoute)
app.use(express.static("public"));
Connection();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/user", (req, res) => {
  res.render("user");
})
app.get("/task", (req, res) => {
  res.render("task");
})
app.get("/exportexcel", (req, res) => {
  res.render("export");
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
})