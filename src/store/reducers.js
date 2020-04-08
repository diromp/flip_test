import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducer as listTransaction } from '../listTransaction/reducer';

export default combineReducers({
  routing: routerReducer,
  listTransaction: listTransaction,
});
