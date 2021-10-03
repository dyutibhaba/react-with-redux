import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import { createEpicMiddleware } from 'redux-observable';

// this store needs to be a accessed from every single component
export const configureStore = () => {
    const epicMiddleware = createEpicMiddleware();
    const store = createStore(
        reducers,
        {},
        applyMiddleware(epicMiddleware),
    );
    return store
}