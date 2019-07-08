import React from 'react';
// import TestSvg from '../assets/wireframetest-09.svg';
import './display/base.css';
import LandingPage from '../components/pages/LandingPage';
import Header from './pages/Header';
import WorkHeader from './pages/WorkHeader';
import { projects } from '../assets/portfolio-details/projects';
import PortfolioList from './pages/portfolio/PortolioList';

export default function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <WorkHeader />
      <PortfolioList projects={projects} />
      {/* <div>
        <TestSvg width={220} height={500}/>
      </div> */}
    </>
  );
}
