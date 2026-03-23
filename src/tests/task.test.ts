import { createTask } from "../task";
describe("Task creation", () => {
  it("should create a new task with title, description, priority, status and an id", () => {
    const task = createTask("Task 1", "Description 1", "high", "todo");
    expect(task).toEqual({
      id: expect.any(String),
      title: "Task 1",
      description: "Description 1",
      priority: "high",
      status: "todo",
    });
  });
});
