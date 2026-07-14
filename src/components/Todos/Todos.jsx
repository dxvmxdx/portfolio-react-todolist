import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './Todos.module.css';

export default function Todos() {
  const [todos, setTodos] = useState(initialTodos);

  const handleAdd = (todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  const handleUpdate = (updated) => {
    setTodos((todos) => todos.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleRemove = (removeId) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== removeId));
  };

  return (
    <section className={styles.container}>
      <ul className={styles.lists}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onRemove={handleRemove}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

const initialTodos = [
  { id: '1', text: '장보기', isCompleted: false },
  { id: '2', text: '청소하기', isCompleted: false },
];
