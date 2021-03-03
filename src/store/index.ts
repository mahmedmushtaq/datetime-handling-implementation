import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger)
);

export type RootState = ReturnType<typeof reducers>;

// @ts-ignore
const persistor = persistStore(store);
export { store, persistor };
