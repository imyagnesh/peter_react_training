const initialState = {
  loading: false,
  error: false,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case '':
      return { ...state, ...payload };

    default:
      return state;
  }
};
