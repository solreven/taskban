// Defines types for Priority, Status and Tasks so that we don't need to think about invalid input
type Priority = "low" | "medium" | "high";
type Status =
  | "todo"
  | "specifying"
  | "implementing"
  | "validating"
  | "deploying"
  | "done";
export type Task = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
};

// creates a new task with title, description, priority, status and an id
export const createTask = (
  title: string,
  description: string,
  priority: Priority,
): Task => {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    priority,
    status: "todo",
  };
};

// Adds a task to the list of tasks
export const addTask = (tasks: Task[], task: Task): Task[] => {
  return tasks.concat(task);
};

// removes a task by id
export const removeTask = (tasks: Task[], id: string): Task[] => {
  return tasks.filter((task) => task.id !== id);
};
