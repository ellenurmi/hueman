import { ADD_HUE, CREATE_PALETTE, REMOVE_HUE, REMOVE_PALETTE } from 'actions/types';

const initialState = {

};

export function paletteReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PALETTE: {
      const { name } = action.payload;
      return {
        ...state,
        [name]: {
          name,
          hues: []
        }
      }
    }
    case REMOVE_PALETTE: {
      const { name } = action.payload;
      const oldState = { ...state };
      delete oldState[name];
      return oldState;
    }
    case ADD_HUE: {
      const { palette, hue } = action.payload;
      if (state[palette].hues.includes(hue)) {
        return { ...state };
      }
      return {
        ...state,
        [palette]: {
          ...state[palette],
          hues: [...state[palette].hues, hue]
        }
      };
    }
    case REMOVE_HUE: {
      const { palette, hue } = action.payload;
      if (!state[palette].hues.includes(hue)) {
        return { ...state };
      }
      return {
        ...state,
        [palette]: {
          ...state[palette],
          hues: state[palette].hues.filter(x => x !== hue)
        }
      }
    }
    default:
      return state;
  }
}
