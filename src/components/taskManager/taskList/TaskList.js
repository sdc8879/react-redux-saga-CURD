import React from 'react'
import { Alert, ListGroup } from 'reactstrap';
import TaskItem from './taskItem/TaskItem';
import Task from "../../../models/task/TaskModel"
import { connect } from 'react-redux';
import { loadAllTasksAction } from '../../../store/actions/TaskAction';


class TaskList extends React.Component {
    componentDidMount() {
        this.props.loadAllTasks()
    }
    render() {
        const { tasks } = this.props
        // props.loadAllTasks();
        if (tasks.length === 0) {
            return <Alert>No task to show</Alert>
        }
        return (
            <ListGroup>
                {
                    tasks.map((task) => <TaskItem key={task.id} task={task} />)
                }
            </ListGroup>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.tasks
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadAllTasks: () => {
            dispatch(loadAllTasksAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
