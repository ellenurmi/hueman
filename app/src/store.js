import { createStore } from 'redux';
import ElectronStore from 'electron-store';
import { rootReducer } from './reducers';
import { persistReducer } from 'redux-persist';
import createElectronStorage from 'redux-persist-electron-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const electronStore = new ElectronStore();

const persistConfig = {
  key: 'root',
  storage: createElectronStorage({
    electronStore
  }),
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);