import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './PortfolioItem';
import styles from '../../display/portfolioPage.css';


function PortfolioList({ projects }) {
  const projectListItems = projects.map(project => {
    return (
      <div className={styles.projectCard} key={project.id}>
        <li>
          <PortfolioItem name={project.name} tech={project.tech} image={project.image} description={project.description} links={project.links} />
        </li>
      </div>
    );
  });

  return (
    <ul className={styles.portfolioContainer}>
      {projectListItems}
    </ul>
  );
}

PortfolioList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default PortfolioList;
