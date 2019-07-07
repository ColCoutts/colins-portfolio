import React from 'react';
import styles from './display/test.css';
import TestSvg from '../assets/wireframetest-09.svg';

export default function App() {
  return (
    <>
      <h1 className={styles.header}>Help ME!</h1>
      <div>
        <TestSvg width={100}/>
        <h1>blahhh</h1>
      </div>
    </>
  );
}
