import * as actionTypes from "../actions/types";

const initialColorsState = {
    primaryColor: "#3E0F41",
    secondaryColor: "#eee"
  };
  
export const colors_reducer = (state = initialColorsState, action) => {
    switch (action.type) {
      case actionTypes.SET_COLORS:
        return {
          primaryColor: action.payload.primaryColor,
          secondaryColor: action.payload.secondaryColor
        };
      default:
        return state;
    }
  };