import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import reducers from '../reducers';

const configureStore = (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(promise, thunk, createLogger())
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => store.replaceReducer(reducers));
  }

  return store;
};

export default configureStore;
