import React from 'react';
import styles from './display/test.css';
import TestSvg from '../assets/wireframetest-09.svg';
import './display/base.css';
import LandingPage from '../components/pages/LandingPage';

export default function App() {
  return (
    <>
      <LandingPage />
      <div>
        <TestSvg width={100}/>
      </div>
    </>
  );
}
