const request = require("supertest");
const app = require("../app");

describe("Task API", () => {
  it("Should return 404 for non-existent route", async () => {
    const res = await request(app).get("/rota-inexistente");
    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Route not found");
  });

  it("Should create a new task", async () => {
    const novaTask = {
      title: "New Task",
      description: "Task description",
      status: "pendente",
    };
    const object = {
      status: 201,
      message: "Task created successfully",
      data: novaTask,
    };
    const res = await request(app).post("/tasks").send(novaTask);
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(object);
  });

  it("Should return all tasks", async () => {
    const res = await request(app).get("/tasks");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("Should return a task by id", async () => {
    const res = await request(app).get("/tasks/1");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Request successful!");
  });
});
