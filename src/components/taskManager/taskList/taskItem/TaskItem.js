
import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListGroupItem, Button } from 'reactstrap';
import { Card, CardBody, CardText, CardGroup, CardTitle } from 'reactstrap';
import { deleteTaskAction } from '../../../../store/actions/TaskAction';

const TaskItem = (props) => {
    const { task } = props;
    const handleDelete = (event) => {
        props.deleteTask(task.id)
    }
    return (
        <ListGroupItem>
            <Link to={'/tasks/' + task.id}>
                {task.title}
            </Link>
            <Button close onClick={handleDelete} />
        </ListGroupItem>
    )
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteTask: (id) => {
            dispatch(deleteTaskAction(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskItem)

