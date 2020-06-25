import { combineReducers } from 'redux';
import simple from './Simple';

const rootReducer = combineReducers({
  simpleState: simple,
});

export default rootReducer;
