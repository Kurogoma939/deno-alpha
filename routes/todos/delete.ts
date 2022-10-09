import { todos } from "./index.ts";

// POSTでdeleteを実装
// idを指定して削除
export const POST = (_req: Request, ctx: Context) => {
  const index = todos.findIndex((t) => String(t.id) === ctx.params.id);
  console.log(index);
  if (index) {
    return Response.json(todos.splice(index, 1)[0]);
  }
  return Response.json({
    error: { message: "todo not found", code: "todoNotFound" },
  }, { status: 404 });
};
