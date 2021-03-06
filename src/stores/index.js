import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import { actionReducer } from '../reducers';

const reducers = combineReducers({
    action : actionReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;