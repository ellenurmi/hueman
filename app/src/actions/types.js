export const ADD_HUE = 'ADD_HUE';
export const REMOVE_HUE = 'REMOVE_HUE';
export const CREATE_PALETTE = 'CREATE_PALETTE';
export const REMOVE_PALETTE = 'REMOVE_PALETTE';

export const addHue = payload => ({
  type: ADD_HUE,
  payload
});

export const removeHue = payload => ({
  type: REMOVE_HUE,
  payload
});

export const createPalette = payload => ({
  type: CREATE_PALETTE,
  payload
});

export const removePalette = payload => ({
  type: REMOVE_PALETTE,
  payload
});
