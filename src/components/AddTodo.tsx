type Props = {
  // Fonction qui prend un paramètre une description
  // et n'a pas de retour.
  //
  // On s'en sert pour transmettre l'information au parent
  // de la tâche que l'on ajoute
  onAddTodo: (description: string) => void;
};

function AddTodo({ onAddTodo }: Props) {
  onAddTodo("TEST");

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
