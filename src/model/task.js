const prisma = require("../helpers/prisma");

const createTask = async (task) => {
  try {
    return prisma.task.create({
      data: task,
    });
  } catch (error) {
    throw new Error("Error creating: " + error.message);
  }
};

const getAllTasks = async () => {
  try {
    return prisma.task.findMany();
  } catch (error) {
    throw new Error("Error fetch: " + error.message);
  }
};

const getTaskById = async (id) => {
  try {
    return prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });
  } catch (error) {
    throw new Error("Error fetch: " + error.message);
  }
};

const updateTask = async (id, task) => {
  try {
    return prisma.task.update({
      where: {
        id: Number(id),
      },
      data: task,
    });
  } catch (error) {
    throw new Error("Error update: " + error.message);
  }
};

const deleteTask = async (id) => {
  try {
    return prisma.task.delete({
      where: {
        id: Number(id),
      },
    });
  } catch (error) {
    throw new Error("Error delete: " + error.message);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
}