import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Expressint() {
  return (
    <div>
         <Card className='shadow text-center p-4 text-dark' style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://mediacity.co.in/crsine/assets/images/services/service-1-3.jpg" />
        <Card.Body>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeuh-GAh_NEXqG7eWw6ITz4vcGZketIu_YwA&usqp=CAU" alt="" height={'80px'} width={'150px'}/>
          <Card.Title className='mt-2 fw-bolder fs-3'>Express Interior</Card.Title>
          <Card.Text>
          There are not many of passages of lorem ipsum avail isn alteration donationa in form.
          </Card.Text>
          <Link to={'/expressint'}> <Button variant="primary"> More Details <i class="fa-solid fa-arrow-right"></i></Button></Link>        </Card.Body>
      </Card>
    </div>
  )
}

export default Expressint