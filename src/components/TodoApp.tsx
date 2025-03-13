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
        id: Date.now().toString(), // Temporaire, bad practice
        description,
        checked: false,
      },
    ]);
  }

  function removeTodo(id: string) {
    // On filtre pour ne garder que les todos qui ne correspondent pas à l'id de la tâche à supprimer
    // Et on met à jour l'état local de notre composant
    setTodos(todos.filter((todo) => todo.id !== id));
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
            onRemove={() => removeTodo(todo.id)}
            // Pour le moment, c'est pas grave si ce n'est que la valeur false
            // Car quand on changera l'état de l'item, on aura le nouveau rendu avec la valeur checked à true dans les données
            onCheck={(value) => console.log("ON CHECK", value)}
          />
        ))}
      </div>
    </>
  );
}
