const {
  invalidStatus,
  created,
  errorInternalServer,
  errorBadRequest,
  successRequest,
  errorNotFound,
  deleted,
  errorRequired,
  updated,
} = require("../helpers/http-helpers.js");
const taskModel = require("../model/task.js");

const STATUS = ["pendente", "concluido"];

const createTask = async (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !status) {
    return errorBadRequest(res);
  }

  if (!STATUS.includes(status)) {
    return invalidStatus(res);
  }

  try {
    const taskBody = { title, description, status };
    const task = await taskModel.createTask(taskBody);
    created(res, "Task", task);
  } catch (error) {
    errorInternalServer(res, error);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.getAllTasks();

    successRequest(res, tasks);
  } catch (error) {
    errorInternalServer(res, error);
  }
};

const getTaskById = async (req, res) => {
  try {
    const idTask = req.params.id;
    const task = await taskModel.getTaskById(idTask);

    if (!task) {
      return errorNotFound(res, "Tasks");
    }

    successRequest(res, task);
  } catch (error) {
    errorInternalServer(res, error);
  }
};

const updateTask = async (req, res) => {
  const { id, title, description, status } = req.body;

  if (!title || !status || !id) {
    return errorRequired(res, "Title, id and status");
  }

  const task = await taskModel.getTaskById(id);
  if (!task) {
    return errorNotFound(res, "Task");
  }

  if (status && !STATUS.includes(status)) {
    return invalidStatus(res);
  }

  try {
    const taskBody = { title, description, status };
    const updatedTask = await taskModel.updateTask(id, taskBody);

    updated(res, "Task", updatedTask);
  } catch (error) {
    errorInternalServer(res, error);
  }
};

const deleteTask = async (req, res) => {
  const idTask = req.params.id;
  const task = await taskModel.getTaskById(idTask);

  if (!task) {
    return errorNotFound(res, "Task");
  }

  try {
    await taskModel.deleteTask(idTask);
    deleted(res, "Task");
  } catch (error) {
    errorInternalServer(res, error);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
};
