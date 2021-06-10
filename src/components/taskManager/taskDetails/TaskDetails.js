import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Alert, Card, CardBody, CardFooter, CardHeader, CardTitle, Row } from 'reactstrap'

const TaskDetails = (props) => {
    const { date, description, title } = props.taskDetails || ""

    return (
        <>
            {props.taskDetails ?
                <Card width="50vw">
                    <CardHeader>
                        {title}
                    </CardHeader>
                    <CardBody>
                        {description}
                    </CardBody>
                    <CardFooter>
                        created at: {new Date(date).toDateString()}
                    </CardFooter>
                </Card>
                : <Alert>Task not found</Alert>
            }
            <p>
                <Link to="/tasks" className="m-5 mt-5 btn btn-link">Back to Tasks</Link>
            </p>
        </>
    )
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const iitem = state.tasks.find((item) => {
        return item.id == id
    })
    return {
        taskDetails: iitem
    }
}
export default connect(mapStateToProps)(TaskDetails)

