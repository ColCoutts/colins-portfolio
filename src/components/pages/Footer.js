import React from 'react';
import styles from '../display/Footer.css';

function Footer() {
  return (
    <section className={styles.footer}>
      <nav>
        <a href='https://github.com/ColCoutts' target='blank'>GitHub</a>
        <a href='https://www.linkedin.com/in/colin-coutts/' target='blank'>LinkedIn</a>
        <a href='https://drive.google.com/file/d/18hZWfHaefewVjet4h9YCE-wWVgWw7eQf/view?usp=sharing' target='blank'>CV</a>
      </nav>
    </section>
  );
}

export default Footer;
