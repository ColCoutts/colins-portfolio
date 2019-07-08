import React from 'react';
import styles from '../display/header.css';

function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.home}>
        <a href=''>Colin</a>
      </div>
      <div className={styles.menu}>
        <a href=''>work</a>
        <a href=''>info</a>
      </div>
    </nav>
  );
}

export default Header;
