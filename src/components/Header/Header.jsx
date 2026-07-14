import { MdNightlight, MdLightMode } from 'react-icons/md';
import styles from './Header.module.css';

export default function Header() {
  const today = new Date();
  const FormattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return (
    <header className={styles.header}>
      <button className={styles.button}>
        <MdNightlight />
      </button>
      <p>{FormattedDate}</p>
    </header>
  );
}
