import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

type TodoItem = {
  id: string;
  description: string;
  checked: boolean;
};

export function TodoApp() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: "1", description: "Acheter des oranges", checked: false },
    { id: "2", description: "Courir avec le fraté", checked: true },
    { id: "3", description: "Me faire défoncer à LoL", checked: true },
  ]);

  function addNewTodo(description: string) {
    setTodos([
      ...todos,
      {
        id: todos.length.toString(), // Temporaire, bad practice
        description,
        checked: false,
      },
    ]);
  }

  return (
    <>
      <AddTodo onAddTodo={addNewTodo} />

      <div className="my-5 flex-column gap-5 w-full text-left">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            description={todo.description}
            checked={todo.checked}
          />
        ))}
      </div>
    </>
  );
}
