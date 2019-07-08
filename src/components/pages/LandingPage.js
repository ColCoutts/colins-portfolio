import React from 'react';
import styles from '../display/landingPage.css';
import Greeting from '../../assets/greeting.svg';

function LandingPage() {
  return ( 
    <div>
      {/* // outer most container for upper landing page container */}
      <main className={styles.landingPage}>
        <div className={styles.about  }>
          {/* portion will have the left justified text intro  */}
          <p>
            My name is Colin: <br />
            developer, color wrangler, <br />
            and advocate for <br /> 
            the color beige.
          </p>
        </div>
        {/* portion for text the about me and call to action */}
        <div className={styles.greeting}>
          {/* portion will have the oh hai to be displayed as a block */}
          {/* <h1>
            Oh, <br />
            hai!
          </h1> */}
          <Greeting
            width={350}
            className={styles.message}
          />
        </div>
      </main>

    </div>
  );
}

export default LandingPage;
