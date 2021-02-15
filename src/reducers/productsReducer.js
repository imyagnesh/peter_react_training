const initialState = {
  loading: false,
  error: false,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_PRODUCTS_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_PRODUCTS_SUCCESS':
      return { ...state, loading: false, data: payload };

    case 'ADD_PRODUCTS_SUCCESS':
      return { ...state, loading: false, data: [...state.data, payload] };

    case 'LOAD_PRODUCTS_FAIL':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
