import React from 'react';
import styles from './display/test.css';
import { ReactComponent as Icon } from '../assets/wireframetest-09.svg';

export default function App() {
  return (
    <>
      <h1 className={styles.header}>Hello World</h1>
      <Icon width={100} />
    </>
  );
}
