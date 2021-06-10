import React from 'react'
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addTaskAction } from "../../../store/actions/TaskAction"

class TaskForm extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        }
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state);
    }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        })
    }
    render() {
        return (
            <Form onSubmit={this.handleFormSubmit}>
                <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" type="textarea" rows="5" onChange={this.handleChange} />
                </FormGroup>
                <Button color="primary">Add</Button>
            </Form>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTask: (data) => {
            dispatch(addTaskAction(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskForm)
