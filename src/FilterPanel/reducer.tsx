import { Action, ActionTypes, State } from "./types";
import { toggleData } from "./helpers";

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.selectPanel: {
      const selectedFilter = state.selectedFilter
        ? action.payload === state.selectedFilter
          ? null
          : action.payload
        : action.payload;
      return { ...state, selectedFilter };
    }
    case ActionTypes.toggleFilter:
      return {
        ...state,
        filterMap: state.filterMap.map((i) => {
          if (i.id === action.payload.key) {
            return toggleData(i, action.payload.data);
          }
          return i;
        })
      };

    default:
      return state;
  }
};

export default reducer;
