import { createAction, createReducer } from 'redux-act';

export const setListTransaction = createAction('@@LIST_TRANSCTION');
export const setInputSearch = createAction('@@INPUT_SEARCH');
export const setLoading = createAction('@@LOADING');

const axios = require('axios');

export const defautStore = () => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://nextar.flip.id/frontend-test`
    )
    .then((res) => {
      dispatch(setLoading(false));
      dispatch(setListTransaction(Object.values(res.data)));
      dispatch(setInputSearch(Object.values(res.data)));
    });
};

const initialState = {
  list: [],
  listSearch: [],
  loading: false,
};

const reducer = createReducer(
  {
    [setListTransaction]: (state, list) => ({
      ...state,
      list,
    }),
    [setInputSearch]: (state, listSearch) => ({
      ...state,
      listSearch,
    }),
    [setLoading]: (state, loading) => ({
      ...state,
      loading,
    }),
  },
  initialState
);

export { reducer, initialState };
