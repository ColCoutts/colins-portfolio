import React from 'react';
import styles from '../display/header.css';

function Header() {
  return (
    <header className={styles.nav}>
      <div className={styles.home}>
        <a href='#landing_page'>Colin</a>
      </div>
      <nav className={styles.menu}>
        <a href='#work'>work</a>
        <a href='#info'>info</a>
      </nav>
    </header>
  );
}

export default Header;
