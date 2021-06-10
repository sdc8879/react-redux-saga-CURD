import { applyMiddleware, createStore } from 'redux'
import RootReducer from './reducers/RootReducer'
// import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../middleware/sagas/RootSaga'



const saga = createSagaMiddleware()


const store = createStore(RootReducer, applyMiddleware(
    saga,
    // logger
))

saga.run(rootSaga)
export default store;