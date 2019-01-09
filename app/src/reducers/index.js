import { combineReducers } from 'redux';
import { paletteReducer } from './palettes';

export const rootReducer = combineReducers({ palettes: paletteReducer });
