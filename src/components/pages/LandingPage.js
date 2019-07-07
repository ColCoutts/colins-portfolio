import React from 'react';

function LandingPage() {
  return ( 
    <div>
      {/* // outer most container for upper landing page container */}
      <main>
        {/* portion for text the about me and call to action */}
        <div>
          {/* portion will have the oh hai to be displayed as a block */}
          <h1>
            Oh, <br />
            hai!
          </h1>
        </div>
        <div>
          {/* portion will have the left justified text intro  */}
          <p>
            My name is Colin: <br />
            developer, color wrangler, <br />
            and advocate for the color beige.
          </p>
        </div>
      </main>

    </div>
  );
}

export default LandingPage;
