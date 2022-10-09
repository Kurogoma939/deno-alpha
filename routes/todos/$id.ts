import { todos } from "./index.ts";

export const GET = (_req: Request, ctx: Context) => {
  const todo = todos.find((t) => String(t.id) === ctx.params.id);
  if (todo) {
    return Response.json(todo);
  }
  return Response.json({
    error: { message: "todo not found", code: "todoNotFound" },
  }, { status: 404 });
};

export const PATCH = async (req: Request, ctx: Context) => {
  const todo = todos.find((t) => String(t.id) === ctx.params.id);
  if (todo) {
    const data = await req.formData();
    const text = data.get("text");
    if (typeof text !== "string" || text.length === 0) {
      return Response.json({
        error: { message: "invalid text", code: "invalidText" },
      }, { status: 400 });
    }
    todo.text = text;
    return Response.json(todo);
  }
  return Response.json({
    error: { message: "todo not found", code: "todoNotFound" },
  }, { status: 404 });
};

export const DELETE = (_req: Request, ctx: Context) => {
  const index = todos.findIndex((t) => String(t.id) === ctx.params.id);
  if (index) {
    return Response.json(todos.splice(index, 1)[0]);
  }
  return Response.json({
    error: { message: "todo not found", code: "todoNotFound" },
  }, { status: 404 });
};
