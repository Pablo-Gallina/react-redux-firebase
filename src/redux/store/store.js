import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { authReducer } from '../reducers/AuthReducer'
import thunk from 'redux-thunk';
import { appReducer } from '../reducers/AppReducer';

// para poder mandar/usar varios reducers
const reducers = combineReducers({
    auth: authReducer,
    app: appReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(thunk))
    )