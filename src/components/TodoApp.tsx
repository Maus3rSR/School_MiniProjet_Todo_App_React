import TodoItem from "./TodoItem";

export function TodoApp() {
  return (
    <>
      <div className="flex">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Ajouter une tâche" />
        </label>

        <button className="btn btn-primary">+</button>
      </div>

      <div className="my-5 flex-column gap-5 w-full text-left">
        <TodoItem description="Acheter des oranges" checked={false} />
        <TodoItem description="Courir avec le fraté" checked={true} />
        <TodoItem description="Me faire défoncer à LoL" checked={true} />
      </div>
    </>
  );
}
