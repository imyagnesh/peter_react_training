import { Formik, Field } from 'formik';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from '../../utils/axios';
import Form from '../../components/Form';
import FormikSelect from '../../components/FormikSelect';
import FormikTextInput from '../../components/FormikTextInput';
import { fields, initialValues } from './fields';

const category = [
  { value: '', text: 'Select Category' },
  { value: 'mobile', text: 'Mobile' },
  { value: 'computer', text: 'Computer' },
];

const Home = ({ history, location, loadProducts, products, addProduct }) => {
  useEffect(() => {
    loadProducts();
    loadProducts();
    loadProducts();
    loadProducts();
    loadProducts();
    loadProducts();
    loadProducts();
    loadProducts();
  }, []);

  const onAsyncDemo = () => {
    import('date-fns').then(({ format }) => {
      const formatedString = format(new Date(), 'MM dd yyyy');
      console.log(formatedString);
    });
  };

  if (products.loading) {
    return <h1>Loading....</h1>;
  }

  if (products.error) {
    return <h1>{products.error.message}</h1>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <input type="button" value="Load Products Request" onClick={onAsyncDemo} />
      <Form initialValues={initialValues} fields={fields} onSubmit={addProduct} />
      {products.data.length > 0 &&
        products.data.map(x => (
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
    products: state.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: () => dispatch({ type: 'LOAD_PRODUCTS_REQUEST' }),
    addProduct: (values, actions) =>
      dispatch({ type: 'ADD_PRODUCTS_REQUEST', payload: values, meta: actions }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
