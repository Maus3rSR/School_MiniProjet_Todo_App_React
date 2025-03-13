import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

type TodoItem = {
  id: string;
  description: string;
  checked: boolean;
};

export function TodoApp() {
  const todos: TodoItem[] = [
    { id: "1", description: "Acheter des oranges", checked: false },
    { id: "2", description: "Courir avec le fraté", checked: true },
    { id: "3", description: "Me faire défoncer à LoL", checked: true },
  ];

  return (
    <>
      <div className="flex">
        <AddTodo
          onAddTodo={(description) => {
            console.log("Composant AddTodo me transmet une info", description);
          }}
        />
      </div>

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
