import React from 'react';
import styles from '../display/landingPage.css';
import Greeting from '../../assets/greeting.svg';

function LandingPage() {
  return ( 
    <div>
      <a name='landing_page'>
        <main className={styles.landingPage}>
          <div className={styles.about}>
            <p>
            My name is Colin Coutts, <br />
            I&apos;m a Software Developer <br />
            passionate about telling <br />
            user stories and collaborating <br /> 
            with other coders to bring<br />
            projects to life.
            </p>
          </div>
          <div className={styles.greeting}>
            <Greeting
              width={350}
              className={styles.message}
            />
          </div>
        </main>
      </a>
    </div>
  );
}

export default LandingPage;
