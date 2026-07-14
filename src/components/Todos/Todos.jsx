import { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './Todos.module.css';

export default function Todos() {
  const [todos, setTodos] = useState(readTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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

const readTodos = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};
