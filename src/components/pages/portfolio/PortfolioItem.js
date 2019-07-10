import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../display/portfolioPage.css';

function PortfolioItem({ name, tech, image, description, links }) {
  console.log('image', image);
  let imageProps = {
    backgroundImage: 'url(' + image + ')',
    backgroundSize: '100%'
  };

  return (
    <div className={styles.image} style={imageProps}>
      <h2>{name}</h2>
      <p>{description}</p>
      <i className={tech[0]}>THING1</i>
      <i className={tech[1]}>THING2</i>
      <nav className={styles.navlinks}>
        <a href={links[0]}>info</a>
        <a href={links[1]}>site</a>
      </nav>
    </div>
  );
}

PortfolioItem.propTypes = {
  name: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
};

export default PortfolioItem;
