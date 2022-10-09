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
