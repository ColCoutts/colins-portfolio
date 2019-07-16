import React from 'react';
import styles from '../display/landingPage.css';
import Greeting from '../../assets/greeting.svg';

function LandingPage() {
  return ( 
    <div>
      <a name='landing_page'>
      {/* // outer most container for upper landing page container */}
      <main className={styles.landingPage}>
        <div className={styles.about}>
          {/* portion will have the left justified text intro  */}
          <p>
            I'm a Software Developer <br />
            passionate about telling <br />
            user stories and solving <br /> 
            human-centered problems <br />
            through code
          </p>
        </div>
        {/* portion for text the about me and call to action */}
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
