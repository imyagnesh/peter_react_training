import {
  ADD_TODO,
  DELETE_TODO,
  FAIL,
  LOAD_TODO,
  REQUEST,
  SUCCESS,
  UPDATE_TODO,
} from '../constants';

export const initialState = {
  loading: false,
  data: [],
  error: null,
  filtetedData: [],
};

export default (state, { type, payload }) => {
  switch (type) {
    case `${LOAD_TODO}_${REQUEST}`:
    case `${ADD_TODO}_${REQUEST}`:
    case `${UPDATE_TODO}_${REQUEST}`:
    case `${DELETE_TODO}_${REQUEST}`:
      return { ...state, loading: true };

    case `${LOAD_TODO}_${SUCCESS}`:
      return { ...state, loading: false, data: payload };

    case `${ADD_TODO}_${SUCCESS}`:
      return { ...state, loading: false, data: [...state.data, payload] };

    case `${UPDATE_TODO}_${SUCCESS}`: {
      const i = state.data.findIndex(x => x.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [...state.data.slice(0, i), payload, ...state.data.slice(i + 1)],
      };
    }

    case `${DELETE_TODO}_${SUCCESS}`: {
      const i = state.data.findIndex(x => x.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [...state.data.slice(0, i), ...state.data.slice(i + 1)],
      };
    }

    case `${LOAD_TODO}_${FAIL}`:
    case `${ADD_TODO}_${FAIL}`:
    case `${UPDATE_TODO}_${FAIL}`:
    case `${DELETE_TODO}_${FAIL}`:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
