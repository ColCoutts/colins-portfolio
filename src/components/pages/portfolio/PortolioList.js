import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './PortfolioItem';
import styles from '../../display/portfolioPage.css';


function PortfolioList({ projects }) {
  const projectListItems = projects.map(project => {
    return (
      <li className={styles.projectCard} key={project.id}>
        <PortfolioItem name={project.name} tech={project.tech} image={project.image} description={project.description} links={project.links} userName={project.userName} passWord={project.passWord} />
      </li>
    );
  });

  return (
    <ul className={styles.portfolioContainer}>
      <div className={styles.listContainer}>
        {projectListItems}
      </div>
    </ul>
  );
}

PortfolioList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default PortfolioList;
