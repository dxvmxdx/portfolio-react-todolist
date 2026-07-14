import styles from './App.module.css';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <h1 className={styles.title}>To Do List</h1>
      <div className={styles.container}>
        <Header />
        <Todos />
      </div>
    </DarkModeProvider>
  );
}

export default App;
