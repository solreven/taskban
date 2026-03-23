export const createTask = (
  title: string,
  description: string,
  priority: string,
  status: string,
) => {
  return {
    // Claude says there's a shorthand for when you know the key and value are the same
    id: crypto.randomUUID(),
    title: title,
    description: description,
    priority: priority,
    status: status,
  };
};
