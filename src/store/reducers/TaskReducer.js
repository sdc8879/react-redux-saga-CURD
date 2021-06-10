import TaskModel from "../../models/task/TaskModel";
import { ADD_TASK, DELETE_TASK, LOADED_ALL_TASK, LOAD_ALL_TASK, TASK_ADDED, TASK_DELETED } from "../action-constants/TaskConstantTypes";

const initialState = []
const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED_ALL_TASK: {
            return action.payload
        }
        case TASK_ADDED: {
            return [
                ...state,
                action.payload
            ]
        }
        case TASK_DELETED: {
            const id = action.payload
            return state.filter((task) => task.id !== id)
        }
        default: return state
    }

}
export default TaskReducer