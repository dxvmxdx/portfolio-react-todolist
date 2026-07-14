import styles from './App.module.css';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <>
      <h1 className={styles.title}>To Do List</h1>
      <div className={styles.container}>
        <Header />
        <Todos />
      </div>
    </>
  );
}

export default App;
