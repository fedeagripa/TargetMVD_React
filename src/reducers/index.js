import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { sessionReducer } from 'redux-react-session';
import map from './mapReducer';
import navbar from './navbarReducer';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  session: sessionReducer,
  map,
  navbar,
  burgerMenu
});

export default rootReducer;
