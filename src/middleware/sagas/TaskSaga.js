import { all, call, put, takeEvery } from 'redux-saga/effects'
import { addTaskAPI, deleteTaskAPI, getAllTaskAPI } from '../../api/taskService/TaskService'
import { ADD_TASK, DELETE_TASK, LOAD_ALL_TASK, TASK_DELETED } from '../../store/action-constants/TaskConstantTypes'
import { setAlertAction } from '../../store/actions/AlertAction'
import { allTasksLoadedAction, taskAddedAction, taskDeletedAction } from '../../store/actions/TaskAction'


/**
 * watcher saga
 */

function* watchLoadAllTask() {
    yield takeEvery(LOAD_ALL_TASK, loadallTask)

}
/**
 * worker saga
 */
function* loadallTask(params) {
    const tasks = yield call(getAllTaskAPI)
    yield put(allTasksLoadedAction(tasks))
}



function* watchAddTask() {

    yield takeEvery(ADD_TASK, workerAddTask)
}
function* workerAddTask({ payload }) {
    try {
        const task = yield call(addTaskAPI, payload)
        yield put(taskAddedAction(task))
        yield put(setAlertAction({
            text: "Task Added",
            color: "success"
        }))
    } catch (error) {
        console.log(error)
        yield put(setAlertAction({
            text: "Task not Added",
            color: "danger"
        }))

    }


}


function* watchDeleteTask() {
    yield takeEvery(DELETE_TASK, deleteTaskWorker)
}
function* deleteTaskWorker(data) {
    try {

        yield call(deleteTaskAPI, data.payload)
        yield put(taskDeletedAction(data.payload))
        yield put(setAlertAction({
            text: "Task Deleted",
            color: "success"
        }))
    } catch (error) {
        console.log(error)
        yield put(setAlertAction({
            text: "Task not Deleted",
            color: "danger"
        }))

    }
}





export function* tasksSaga() {
    yield all([
        watchLoadAllTask(),
        watchAddTask(),
        watchDeleteTask()
    ])
}