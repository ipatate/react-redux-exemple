import axios from 'axios';

import * as ActionTypes from '../constants/constants';

export function setPosts(value) {
  return {
    type: ActionTypes.SET_POST,
    value,
  };
}

export function resetPosts(value = []) {
  return {
    type: ActionTypes.RESET_POST,
    value
  };
}

export function fetchPosts() {
  return (dispatch) => {
    dispatch(resetPosts());
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      dispatch(setPosts(response.data))
    })
    .catch(error => {
      throw new Error(error);
    })
  }
}
