import React from 'react';
import styles from '../display/layout.css';
function LandingPage() {
  return ( 
    <div>
      {/* // outer most container for upper landing page container */}
      <main className={styles.landingPage}>
        <div>
          {/* portion will have the left justified text intro  */}
          <p>
            My name is Colin: <br />
            developer, color wrangler, <br />
            and advocate for the color beige.
          </p>
        </div>
        {/* portion for text the about me and call to action */}
        <div>
          {/* portion will have the oh hai to be displayed as a block */}
          <h1>
            Oh, <br />
            hai!
          </h1>
        </div>
      </main>

    </div>
  );
}

export default LandingPage;
