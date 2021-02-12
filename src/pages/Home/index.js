import React from 'react';

const Home = ({ history, location }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <button
        type="button"
        onClick={() =>
          history.push('/about', {
            text: 'hello',
          })
        }>
        About
      </button>
      <button type="button" onClick={() => history.push('/users/1')}>
        Users
      </button>
    </div>
  );
};

export default Home;
