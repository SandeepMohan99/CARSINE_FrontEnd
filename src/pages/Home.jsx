import React from 'react'
import Slider from '../components/Slider'
import Message from '../components/Message'
import Service from '../components/Service'
import { Col, Row } from 'react-bootstrap'


function Home() {
  return (
    <>
      <div>
        <Row>
          <Col>
           <Slider/>
          </Col>
        </Row>
        <Row>
          <Col>
           <Message/>
          </Col>
        </Row>
        <Row>
          <Col>
           <Service/>
          </Col>
        </Row>
       
       
        
      </div>
    </>
  )
}

export default Home