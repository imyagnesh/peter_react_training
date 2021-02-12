import React from 'react';

const About = ({ history, location, ...rest }) => {
  console.log(rest);
  return (
    <div>
      <h1>About Page</h1>
      <button type="button" onClick={() => history.goBack()}>
        Go Back
      </button>
      {/* <h1>{location.state.text}</h1> */}
    </div>
  );
};

export default About;
