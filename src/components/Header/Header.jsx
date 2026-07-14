import { MdNightlight, MdLightMode } from 'react-icons/md';

import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const today = new Date();
  const FormattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return (
    <header className={styles.header}>
      <button className={styles.button} onClick={toggleDarkMode}>
        {!darkMode && <MdNightlight />}
        {darkMode && <MdLightMode />}
      </button>
      <p>{FormattedDate}</p>
    </header>
  );
}
