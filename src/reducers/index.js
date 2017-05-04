import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import session from './sessionReducer';
import map from './mapReducer';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  session,
  map
});

export default rootReducer;
