import React from 'react'
import { Row, Col } from "react-bootstrap"

const Title = () => {
    return (
        <Row>
            <Col sm="12" className="justify-content-center text-center">
                <div className="title">Food Menue</div>
                <div className=" d-flex justify-content-center">
                    <p className="underline"></p>
                </div>
            </Col>
        </Row>
    )
}

export default Title
