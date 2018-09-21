import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import { posts } from './reducers/posts';

const reducer = combineReducers({
    posts
  })

const store = createStore(
    reducer,/* preloadedState, */
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware
    ),
    );


export default store;
