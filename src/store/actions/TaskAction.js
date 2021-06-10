import { ADD_TASK, DELETE_TASK, LOADED_ALL_TASK, LOAD_ALL_TASK, TASK_ADDED, TASK_DELETED } from "../action-constants/TaskConstantTypes";

/**
 * 
 * @param {title,description} data 
 */
export const addTaskAction = (data) => {
    return {
        type: ADD_TASK,
        payload: data
    }
};
export const taskAddedAction = (data) => {
    return {
        type: TASK_ADDED,
        payload: data
    }
}
export const deleteTaskAction = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
};
export const taskDeletedAction = (id) => {
    return {
        type: TASK_DELETED,
        payload: id
    }
}

export const loadAllTasksAction = () => {
    return {
        type: LOAD_ALL_TASK
    }
}
export const allTasksLoadedAction = (tasks) => {
    return {
        type: LOADED_ALL_TASK,
        payload: tasks
    }
}