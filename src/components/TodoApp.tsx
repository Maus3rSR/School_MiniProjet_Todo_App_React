import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import useTodo from "../hooks/useTodo";

export function TodoApp() {
  const { todos, addNewTodo, removeTodo, checkTodo } = useTodo();

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
            onCheck={(value) => checkTodo(todo.id, value)}
          />
        ))}
      </div>
    </>
  );
}
