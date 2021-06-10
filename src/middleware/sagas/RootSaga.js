import { all } from "@redux-saga/core/effects"
import { tasksSaga } from "./TaskSaga"

function* rootSaga() {
  yield all([
      tasksSaga()
  ])
}
export default rootSaga