import axios from "axios"
import TaskModel from "../../models/task/TaskModel"


const API = "http://localhost:3004/tasks"

export const getAllTaskAPI = () => {
    return axios.get(API)
        .then((response) => {
            return response.data
        })
        .catch((error) => { console.log(error) })

}
export const deleteTaskAPI = (id) => {
    return axios.delete(`${API}/${id}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => { console.log(error) })
}
export const addTaskAPI = (task) => {
    task.date = new Date();
    task.completed = false;
    return axios.post(API, task)
        .then((response) => {
            return response.data
        })
        .catch((error) => { console.log(error) })
}