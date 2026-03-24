type Priority = "low" | "medium" | "high";
type Status =
  | "todo"
  | "specifying"
  | "implementing"
  | "validating"
  | "deploying"
  | "done";
type Task = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
};

export const createTask = (
  title: string,
  description: string,
  priority: Priority,
) => {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    priority,
    status: "todo",
  };
};
// I need to deal with these any-types so that it actually makes sense to use TS
export const addTask = (list: Task[], task: Task) => {
  return list.concat(task);
};
