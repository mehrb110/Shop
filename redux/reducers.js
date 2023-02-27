import todos from './todoSlice';
import baskets from './basketSlice';

import { combineReducers } from 'redux';

export default combineReducers({ todos, baskets })