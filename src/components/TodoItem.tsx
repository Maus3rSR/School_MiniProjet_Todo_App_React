type Props = {
  description: string;
  checked: boolean;
  onRemove: () => void;
  onCheck: (value: boolean) => void;
};

function TodoItem({ description, checked, onRemove, onCheck }: Props) {
  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    onCheck(isChecked);
  }

  return (
    <div className="bg-indigo-700 w-full m-5 rounded-box p-3 flex">
      <span className="pr-8">
        <input
          onChange={handleCheckboxChange}
          type="checkbox"
          className="checkbox"
          checked={checked}
        />
      </span>
      {/* Utilisation de l'opérateur logique && pour ajouter dynamique la classe quand checked vaut true */}
      <span className={`flex-grow ${checked && "line-through"}`}>
        {description}
      </span>
      <div>
        <button onClick={onRemove} className="btn btn-error btn-outline btn-xs">
          X
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
