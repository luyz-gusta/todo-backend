const express = require("express");
const taskController = require("../controller/taskController.js");

const router = express.Router();

router.get("/", taskController.getAllTasks)
router.get("/:id", taskController.getTaskById)
router.post("/", taskController.createTask)
router.put("/", taskController.updateTask)
router.delete("/:id", taskController.deleteTask)

module.exports = router;
