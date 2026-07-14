import { FaRegTrashAlt } from 'react-icons/fa';

export default function Todo({
  todo,
  todo: { id, text, isCompleted },
  onUpdate,
  onRemove,
}) {
  const handleChange = (e) => {
    onUpdate({ ...todo, isCompleted: e.target.checked });
  };
  return (
    <li>
      <input
        type="checkbox"
        name="text "
        id="checkbox"
        checked={isCompleted}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={() => onRemove(id)}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
