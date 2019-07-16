import React from 'react';
import styles from '../display/aboutPage.css';

function AboutPage() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.main}>
        <h2>Bio</h2>
        <p>Originally hailing from Chicago, I've spent the last few years executing projects for clients ranging from apparel to augmented reality. My passion for programming was born from a desire to not only continue to grow my skillset as a designer but to also transition into a field where I felt I could use my background to solve human related problems through tech. When I'm not tapping away at the computer, one can generally find me taking a bike ride, reading a book, or sketching in a coffee shop.</p>
      </div>
      <div className={styles.sideCol}>
        <div className={styles.side}>
          <h2>tech</h2>
          <p>
            - React/Redux <br />
            - Javascript <br />
            - HTML/CSS/PostCSS <br />
            - Firebase <br />
            - Node.js/Webpack <br />
            - API Integration <br />
            - Express.js/MongoDB <br />
            - Jest/Enzyme/QUnit <br />
            - Heroku/Netlify Hosting <br />
          </p>
        </div>
        <div className={styles.side}>
          <h2>design</h2>
          <p>
            - UX/UI Development <br />
            - Wireframing/ Prototyping <br />
            - Accessibility <br />
            - Logo/Brand Development<br />
            - Digital/Visual/Print <br />
            - Art Direction <br />
            - Illustration <br />
            - Marketing <br />
            - Interactive Design <br />
            - Adobe Suite <br />
            - Sketch <br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
