import { createStore } from 'redux';
import { reducer } from './reducers';

const initialState = {
  currentUser: null
}

const store = createStore(reducer, initialState);

export default store;