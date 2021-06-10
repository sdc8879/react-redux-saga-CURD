import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import TaskForm from './taskForm/TaskForm';
import TaskList from './taskList/TaskList';

const TaskManager = () => {
    return (
        <>
        <Row>
            <Col>
            <TaskForm/>
            </Col>
            <Col>
            <TaskList/>
            </Col>
        </Row>
        </>
         
    )
}

export default TaskManager
