const User = require("../models/user");
const Task = require("../models/task");

exports.createTask = (req, res) => {
  User.find()
    .then(users => {
      res.render("task", { title: "Add Task", users: users });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Error fetching users");
    });
};

exports.addTask = (req, res) => {
  const task = new Task({
    user_id: req.body.user_id,
    task_name: req.body.task_name,
    task_type: req.body.task_type
  });

  task
    .save()
    .then(() => {
      res.redirect("/exportexcel");
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Error adding task");
    });
};
