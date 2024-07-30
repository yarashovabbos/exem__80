import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { studentReducer } from './reducers/studentReducers';
import { userReducer } from './reducers/userReducers';

const reducer = combineReducers({
  studentList: studentReducer,
  userLogin: userReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
