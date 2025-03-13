import { InputHTMLAttributes, useState } from "react";

type Props = {
  // Fonction qui prend un paramètre une description
  // et n'a pas de retour.
  //
  // On s'en sert pour transmettre l'information au parent
  // de la tâche que l'on ajoute
  onAddTodo: (description: string) => void;
};

function AddTodo({ onAddTodo }: Props) {
  function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // FormData est un objet natif à JavaScript
    // Quand on lui donne un ElementHTML de formulaire
    // Il s'occupe d'aller récupérer les valeurs de nos champs
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);

    // On récupère le champ "task"
    // C'est ce qu'on a mis en valeur de l'attribut HTML "name"
    const task = formData.get("task");

    if (!task) return;

    // Ici on peut considérer que le type est de type "string"
    onAddTodo(task as string);
    // On supprime les valeurs des champs de notre formulaire
    form.reset();
  }

  return (
    // On submit nous permet à la fois de soumettre le formulaire avec un bouton
    // et également avec la touche entrée
    <form onSubmit={onFormSubmit}>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          name="task"
          className="grow"
          placeholder="Ajouter une tâche"
        />
      </label>
      <button type="submit" className="btn btn-primary">
        +
      </button>
    </form>
  );
}

export default AddTodo;
