import { ACTION_TYPES } from "../actions/recipes";
const initialstate = {
  list: [],
};
export const recipe = (state = initialstate, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};
