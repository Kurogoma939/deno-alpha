export type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

export const todos: Todo[] = [
  { id: 1, text: "タスク１", isDone: false },
  { id: 2, text: "タスク２", isDone: true },
  { id: 3, text: "タスク３", isDone: false },
  { id: 4, text: "タスク４", isDone: true },
  { id: 5, text: "タスク５", isDone: false },
];

export const GET = (req: Request) => {
  const url = new URL(req.url);
  return Response.json(
    todos.map((todo) => ({ ...todo, url: `${url.origin}/users/${todo.id}` })),
  );
};

export const POST = async (req: Request) => {
  const data = await req.formData();
  const text = data.get("text");
  if (typeof text !== "string" || text.length === 0) {
    return Response.json({
      error: { message: "invalid text", code: "invalidText" },
    }, { status: 400 });
  }
  const todo: Todo = { id: todos.length + 1, text, isDone: false };
  todos.push(todo);
  return Response.json(todos);
};
