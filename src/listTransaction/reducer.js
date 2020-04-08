import { createAction, createReducer } from 'redux-act';

export const setListTransaction = createAction('@@LIST_TRANSCTION');
export const setInputSearch = createAction('@@INPUT_SEARCH');

const axios = require('axios');

export const defautStore = () => (dispatch) => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://nextar.flip.id/frontend-test`
    )
    .then((res) => {
      dispatch(setListTransaction(Object.values(res.data)));
      dispatch(setInputSearch(Object.values(res.data)));
    });
};

const initialState = {
  list: [],
  listSearch: [],
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
  },
  initialState
);

export { reducer, initialState };
