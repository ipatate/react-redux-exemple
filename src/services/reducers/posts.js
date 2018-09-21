import * as ActionTypes from '../constants/constants';


export const posts = function posts( state = [], action) {
  switch (action.type) {
    case ActionTypes.SET_POST:
      return action.value;
      case ActionTypes.RESET_POST:
      return [];
    default:
      return state
  }
}


export default posts;
