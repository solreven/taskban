import { createTask, addTask } from "../task";
describe("Task creation", () => {
  it("should create a new task with title, description, priority, status and an id", () => {
    const task = createTask("Task 1", "Description 1", "high");
    expect(task).toEqual({
      id: expect.any(String),
      title: "Task 1",
      description: "Description 1",
      priority: "high",
      status: "todo",
    });
  });
});
describe("adding tasks", () => {
  it("adds a task to an empty list...", () => {
    const list = [];
    const task = createTask("Task 1", "Description 1", "high");

    const result = addTask(list, task);

    expect(result).toHaveLength(1);
  });
  it("... and the task is added to the list", () => {
    const list = [];
    const task = createTask("Task 1", "Description 1", "high");

    const result = addTask(list, task);

    expect(result[0]).toEqual(task);
  });
});
describe.todo("Removing a task", () => {
  it.todo("removes a task by referring to its id", () => {});
  it.todo(
    "removes a task by referring to its name while making sure it is unique",
    () => {},
  );
});
