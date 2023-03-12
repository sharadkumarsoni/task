const User = require("../models/user");
const Task = require("../models/task");
const exceljs = require("exceljs");

exports.exportToExcel = (req, res) => {
  User.find()
    .then(users => {
      Task.find()
        .then(tasks => {
          const workbook = new exceljs.Workbook();
          const usersSheet = workbook.addWorksheet("Users");
          const tasksSheet = workbook.addWorksheet("Tasks");
          
          usersSheet.columns = [
            { header: "ID", key: "_id" },
            { header: "Name", key: "name" },
            { header: "Email", key: "email" },
            { header: "Mobile", key: "mobile" }
          ];

          
          tasksSheet.columns = [
            { header: "ID", key: "_id" },
            { header: "User ID", key: "user_id" },
            { header: "Task Name", key: "task_name" },
            { header: "Task Type", key: "task_type" }
          ];

          users.forEach(user => {
            usersSheet.addRow({
              _id: user._id,
              name: user.name,
              email: user.email,
              mobile: user.mobile
            });
          });

          tasks.forEach(task => {
            tasksSheet.addRow({
              _id: task._id,
              user_id: task.user_id,
              task_name: task.task_name,
              task_type: task.task_type
            });
          });

          res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          );
          res.setHeader(
            "Content-Disposition",
            "attachment; filename=data.xlsx"
          );
          return workbook.xlsx.write(res);
        })
        .catch(err => {
          console.error(err);
          res.status(500).send("Error fetching tasks");
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Error fetching users");
    });
};
