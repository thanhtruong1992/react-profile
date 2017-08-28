import redux from 'redux';
import {combineReducers } from 'redux';
import auth from 'authReducer';

let Reducer = combineReducers({
  auth
});

export default Reducer;
