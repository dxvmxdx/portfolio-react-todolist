import { FaRegTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

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
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name="text"
        id={id}
        checked={isCompleted}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <button className={styles.button} onClick={() => onRemove(id)}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
