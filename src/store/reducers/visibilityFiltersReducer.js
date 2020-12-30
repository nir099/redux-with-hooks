import { SET_FILTER } from '../actions/types';
import { VISIBILITY_FILTERS } from '../../constants';

const defaultState = VISIBILITY_FILTERS.ALL;

const visibilityFilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilterReducer;
