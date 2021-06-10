import React, { Component } from 'react';
import {Form,Button, Container, Row, Col } from 'reactstrap';
import FormControl from './FormControl';


class Login extends Component {
    render() {
        return (
            <Row>
                <Col md={4}>
                    <Form>
                        <FormControl label="User" type="text" handleChange={this.handleChange}/>
                        <FormControl label="Password" type="password" handleChange={this.handleChange}/>
                        <Button>login</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default Login;