import { applyMiddleware, compose, createStore } from 'redux';
import modules from './modules';

const devTools =
  typeof window !== 'undefined' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const configure = () => {
  const store = createStore(modules, composeEnhancers(), applyMiddleware());
  return store;
};

export default configure;
