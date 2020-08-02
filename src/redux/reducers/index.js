import user from './user';
import data from './data';
import {combineReducers} from 'redux';
import register from './registerReducer';

const allReducers = combineReducers({
  data, register
})

export default allReducers;