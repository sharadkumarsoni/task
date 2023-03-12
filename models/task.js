const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  task_name: {
    type: String,
    required: true
  },
  task_type: {
    type: String,
    enum: ["Pending", "Done"],
    default: "Pending",
    required: true
  }
});

module.exports = mongoose.model("Task", taskSchema);
