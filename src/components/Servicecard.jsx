import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Servicecard() {
  return (
    <div>
      
      <Card className='shadow text-center p-4 text-dark' style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://mediacity.co.in/crsine/assets/images/services/service-1-1.jpg" />
        <Card.Body>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqB-iOTtep7tjK0Dz29uLWBXP20-Fik1rTdXNTQhthQ&s" alt="" height={'80px'} width={'80px'}/>
          <Card.Title className='mt-2 fw-bolder fs-3'>Full Service Wash</Card.Title>
          <Card.Text>
          There are not many of passages of lorem ipsum avail isn alteration donationa in form.
          </Card.Text>
          <Link to={'/servicepage'}> <Button variant="primary"> More Details <i class="fa-solid fa-arrow-right"></i></Button></Link>      
        </Card.Body>
      </Card>

    </div>
  )
}

export default Servicecard