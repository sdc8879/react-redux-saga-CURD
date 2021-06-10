import { combineReducers } from 'redux'
import { alertReducer } from './AlertReducer'
import TaskReducer from './TaskReducer'


const RootReducer = combineReducers({
    tasks: TaskReducer,
    alert: alertReducer
})

export default RootReducer