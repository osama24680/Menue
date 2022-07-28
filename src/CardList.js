import React, {useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AuthContext } from './Context';
import {motion} from "framer-motion"
const CardList = () => {

    let ctx = useContext(AuthContext)
    console.log(ctx)
    return (
        <Row>
            <Col sm="12" className="mb-3">
            {ctx.dataList.map(item => (
                <Card className="d-flex flex-row my-2">
                        <Row>
                            <Col sm="12" md="6" lg="3">
                                <Card.Img variant="top" src={item.img} className="img_item " />
                            </Col>
                            <Col sm="12" md="6" lg="9">
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-between">
                                        <div className="item_title">{item.title}</div>
                                        <div className="item_price">{item.price}</div>

                                    </Card.Title>
                                    <Card.Text className='py-2'>
                                        <div className="item_description">
                                            {item.content}
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                </Card>
                ))}
            </Col>
        </Row>
    )
}

export default CardList
