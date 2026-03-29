import {
  createTask,
  addTask,
  removeTask,
  updateTask,
  getTodoTasks,
  getDoneTasks,
} from "../task";
import type { Task } from "../task";

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
// These could also just be one test, but hey I'm learning
describe("adding tasks", () => {
  it("checks that it adds a task to an empty list...", () => {
    const list = [] as Task[];
    const task = createTask("Task 1", "Description 1", "high");

    const result = addTask(list, task);

    expect(result).toHaveLength(1);
  });
  it("... and the task is added to the list", () => {
    const list = [] as Task[];
    const task = createTask("Task 1", "Description 1", "high");

    const result = addTask(list, task);

    expect(result[0]).toEqual(task);
  });
});
describe("Removing a task", () => {
  it("removes a task by referring to its id", () => {
    const task1 = createTask("Task 1", "Description 1", "high");
    const task2 = createTask("Task 2", "Description 2", "high");
    const list = [task1, task2];

    const result = removeTask(list, task2.id);

    expect(result).toEqual([task1]);
  });
  it("removes all tasks that have the same title", () => {
    const task1 = createTask("Task 1", "Description 1", "high");
    const task2 = createTask("Task 1", "Description 2", "high");
    const list = [task1, task2];

    const result = removeTask(list, task1.title);

    expect(result).toEqual([]);
  });
  it.todo("removes only the first of tasks that have the same title");
});
describe("Update a task", () => {
  it("update a task by changing its status to done", () => {
    const task1 = createTask("Task 1", "Description 1", "high");
    const task2 = createTask("Task 2", "Description 2", "high");
    const list = [task1, task2];

    const finish = updateTask(list, task1.id, { status: "done" });

    expect(finish[0].status).toEqual("done");
    expect(finish[1].status).toEqual("todo");
    expect(finish).toHaveLength(2);
  });
});
describe("Tests to determine what lists and statuses tasks are in", () => {
  it("checks that the lists the tests are in reflect what statuses the tasks are in", () => {
    const task1 = createTask("Task 1", "Description 1", "high");
    const tasks = [task1];

    const updated = updateTask(tasks, task1.id, { status: "done" });

    const todoList = getTodoTasks(updated);
    const doneList = getDoneTasks(updated);

    expect(todoList).toHaveLength(0);
    expect(doneList).toHaveLength(1);
  });
});
