import { combineReducers } from 'redux';
import {
  SET_SEARCH_FIELD,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FAILED,
} from './constants';

// Search reducer
const initialStateSearch = {
  searchField: '',
};

const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case SET_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

// Robots reducer
const initialStateRobots = {
  isPending: false,
  robots: [],
  error: '',
};

const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ searchRobots, requestRobots });
export default rootReducer;
