import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import modules from './modules';

const devTools =
  typeof window !== 'undefined' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const middlewares = [ReduxThunk];

const configure = () => {
  const store = createStore(
    modules,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
};

export default configure;
