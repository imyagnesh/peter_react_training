import React from 'react';
import { connect } from 'react-redux';

const About = ({ history, location, prod, ...rest }) => {
  console.log(rest);
  return (
    <div>
      <h1>About Page</h1>
      <button type="button" onClick={() => history.goBack()}>
        Go Back
      </button>
      {/* <h1>{location.state.text}</h1> */}
      {prod.data.length > 0 &&
        prod.data.map(x => (
          <div>
            <h3>{`Product Name: ${x.productName}`}</h3>
            <h3>{`product Price: ${x.productPrice}`}</h3>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    prod: state.products,
  };
};

export default connect(mapStateToProps)(About);
