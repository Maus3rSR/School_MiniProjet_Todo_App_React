// Nous pouvons faire nos propres hooks
// Pour extraire du code logique et le découpler du composant
//
// On pourrait donc réutiliser ce hook dans d'autres composants React si souhaité

import { useState } from "react";

type TodoItem = {
  id: string;
  description: string;
  checked: boolean;
};

export default function useTodo() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: "1", description: "Acheter des oranges", checked: false },
    { id: "2", description: "Courir avec le fraté", checked: true },
    { id: "3", description: "Me faire défoncer à LoL", checked: true },
  ]);

  // Tri pour avoir en premier les tâches non cochées
  // voir la documentation sur sort
  //
  // Ici sort est une fonction qui mute le tableau original
  // Donc on fait en sorte de travailler sur un nouveau tableau
  // Qui sera une copie de todos
  //
  // Il existe .toSorted pour la version qui ne mute pas le tableau original, mais le tsconfig n'est pas configuré ici
  // pour utiliser des fonctions récemment ajoutées par EcmaScript
  const sortedTodos = Array.from(todos).sort((a, b) =>
    a.checked === b.checked ? 0 : a.checked ? 1 : -1
  );

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

  function checkTodo(id: string, check: boolean) {
    setTodos(
      // .map nous permet de créer un nouveau tableau
      // avec une fonction de transformation pour chaque élément du tableau initial
      todos.map((todo) =>
        // Si c'est le todo concerné par le changement,
        // On modifie l'objet avec la valeur de la checkbox,
        // Sinon on garde l'objet tel qu'il est
        todo.id === id ? { ...todo, checked: check } : todo
      )
    );
  }

  // J'expose pour les composants une micro-API de gestion de tâches à faire
  return {
    todos: sortedTodos,
    addNewTodo,
    removeTodo,
    checkTodo,
  };
}
