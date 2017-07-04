import * as types from './actionTypes';
import { browserHistory } from 'react-router';
import { routes } from '../constants/routesPaths';

export function changeStep() {
  return {
    type: types.CHANGE_STEP,
  };
}

export function changeEditing() {
  browserHistory.push(routes.edit);
  return {
    type: types.CHANGE_EDITING,
  };
}
