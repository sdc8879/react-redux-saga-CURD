import React from 'react'
import { Col, Row } from 'reactstrap'
import GlobalAlert from '../alert/GlobalAlert'
import Nav from '../nav/Nav'

const Header = () => {
    return (
        <>
            <Row>
                <Col>
                    <h1>Task Manager</h1>
                </Col>
                <Col>
                    <Nav />
                </Col>
            </Row>
            <hr />
            <GlobalAlert />
        </>
    )
}

export default Header
