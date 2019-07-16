import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../display/portfolioPage.css';

function PortfolioItem({ name, tech, image, description, userName, passWord, links }) {
  let imageProps = {
    backgroundImage: 'url(' + image + ')',
    backgroundSize: '100%'
  };

  return (
    <div className={styles.image} style={imageProps}>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>{userName}</h3>
      <h3>{passWord}</h3>
      <i className={tech[0]}></i>
      <i className={tech[1]}></i>
      <nav className={styles.navlinks}>
        <a href={links[0]} target='blank'>info</a>
        <a href={links[1]} target='blank'>site</a>
      </nav>
    </div>
  );
}

PortfolioItem.propTypes = {
  name: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  userName: PropTypes.string,
  passWord: PropTypes.string
};

export default PortfolioItem;
