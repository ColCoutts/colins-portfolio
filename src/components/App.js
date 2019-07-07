import React from 'react';
import TestSvg from '../assets/wireframetest-09.svg';
import './display/base.css';
import LandingPage from '../components/pages/LandingPage';

export default function App() {
  return (
    <>
      <LandingPage />
      <div>
        <TestSvg width={220} height={500}/>
      </div>
    </>
  );
}
