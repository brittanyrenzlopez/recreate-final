import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER } from '../actions/types';
// every reducer exports function,
// takes initial state and an action
// test w a switch
// action includes a type
// test cases

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
