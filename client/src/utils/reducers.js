import { UPDATE_CURRENT_USER } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser: [...action.currentUser]
      };
      default:
        return state;
  }
};
