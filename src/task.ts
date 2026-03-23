export const createTask = (
  title: string,
  description: string,
  priority: string,
) => {
  return {
    // Claude says there's a shorthand for when you know the key and value are the same
    id: crypto.randomUUID(),
    title: title,
    description: description,
    priority: priority,
    status: "todo",
  };
};
// I need to deal with these any-types so that it actually makes sense to use TS
export const addTask = (list: any, task: any) => {
  return list.concat(task);
};
