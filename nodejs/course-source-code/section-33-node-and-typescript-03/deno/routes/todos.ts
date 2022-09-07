import { Router, BodyOptions } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

interface Todo {
  id: string;
  text: string;
}

let todos: Todo[] = [];

router.get('/todos', (ctx) => {
  ctx.response.body = { todos };
});

router.post('/todos', async (ctx) => {
  const body = ctx.request.body();
  const value = await body.value;
  const newTodo: Todo = {
    id: Date.now().toString(),
    text: value.text,
  };

  todos.push(newTodo);

  ctx.response.body = { message: 'Created todo!', todo: newTodo };
});

router.put('/todos/:todoId', async (ctx) => {
  const todoId = ctx.params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex >= 0) {
    const body = ctx.request.body();
    const value = await body.value;
    console.log(value);
    todos[todoIndex] = { id: todos[todoIndex].id, text: value.text };
    ctx.response.body = { message: 'updated todo!' };
  } else {
    ctx.response.status = 404;
    ctx.response.body = { error: 'Could not found todo!' };
  }
});

router.delete('/todos/:todoId', (ctx) => {
  const todoId = ctx.params.todoId;
  todos = todos.filter((todo) => todo.id !== todoId);
  ctx.response.body = { message: 'Deleted todo!' };
});

export default router;
