import React from 'react'
import { Row, Col } from "react-bootstrap"
import SingleElement from './SingleElement'
export default function ListOfIteams({ stories }) {
    return (
        <Row className='mx-0'>
            {
                stories?.map(element => (
                    <Col xl={4} sm={6} xs={12} key={element.id} className='mb-5 '>
                        <SingleElement key={element.id} element={element} />
                    </Col>
                ))
            }
        </Row>
    )
}
