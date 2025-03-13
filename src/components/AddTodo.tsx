function AddTodo() {
  return (
    <>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Ajouter une tâche" />
      </label>
      <button className="btn btn-primary">+</button>
    </>
  );
}

export default AddTodo;
