import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store } from '../../store';
import { Home } from '../Home';

const persistor = persistStore(store);

const App = () => (
  <div>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </PersistGate>
    </Provider>
  </div>
);

export default hot(module)(App);
