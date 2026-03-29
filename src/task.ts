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

// removes a task by id or all(sic!) tasks with the same title
export const removeTask = (tasks: Task[], id: string): Task[] => {
  if (tasks.some((task) => task.title === id)) {
    return tasks.filter((task) => task.title !== id);
  } else {
    return tasks.filter((task) => task.id !== id);
  }
};

// Updates a task's status. Claude says to use .map and {...task, ...change} whichh
export const updateTask = (
  list: Task[],
  id: string,
  /* Claude suggested: change: Partial<Task> here. 
  However, that means we'll need status: change.status ?? task.status (or something similar) further down in the function,
  and I can't imagine how that's best practice. But who am I to talk, I'm using a loop instead of .map!
  That'll need refactoring later. Also check how this relates to test coverage.
  */
  change: { status: Status },
): Task[] => {
  const updatedList: Task[] = [];
  for (let i = 0; i < list.length; i++) {
    const task = list[i];
    if (task.id === id) {
      updatedList.push({
        id: task.id,
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: change.status,
        /*
        if you think it's better to use Partial<Task> instead of { status: Status }, you can use this to fix the error it'll throw:
        status: change.status ?? task.status,
        */
      });
    } else {
      updatedList.push(task);
    }
  }
  return updatedList;
};

export const getTodoTasks = (tasks: Task[]) => {
  const todoTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status === "todo") {
      todoTasks.push(tasks[i]);
    }
  }
  return todoTasks;
};

export const getDoneTasks = (tasks: Task[]) => {
  const doneTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status === "done") {
      doneTasks.push(tasks[i]);
    }
  }
  return doneTasks;
};
