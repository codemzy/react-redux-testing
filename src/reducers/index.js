import { combineReducers } from 'redux';

// reducers
import commentsReducer from './reducer_comments';

const rootReducer = combineReducers({
  comments: commentsReducer
});

export default rootReducer;
