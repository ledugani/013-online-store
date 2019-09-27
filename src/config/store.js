import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({

})

const store = createStore(
  rootReducer,
  // CHECK TO SEE IF FUNCTION EXISTS (if browser has dev tools extension) AND, IF SO, CALL IT
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;