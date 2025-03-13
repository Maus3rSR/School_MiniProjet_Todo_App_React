import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export function TodoApp() {
  return (
    <>
      <div className="flex">
        <AddTodo />
      </div>

      <div className="my-5 flex-column gap-5 w-full text-left">
        <TodoItem description="Acheter des oranges" checked={false} />
        <TodoItem description="Courir avec le fraté" checked={true} />
        <TodoItem description="Me faire défoncer à LoL" checked={true} />
      </div>
    </>
  );
}
