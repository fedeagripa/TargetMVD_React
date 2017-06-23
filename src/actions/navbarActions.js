import * as types from './actionTypes';
import { browserHistory } from 'react-router';

export function changeStep() {
  return {
    type: types.CHANGE_STEP,
  };
}

export function changeEditing() {
  browserHistory.push('/edit');
  return {
    type: types.CHANGE_EDITING,
  };
}
