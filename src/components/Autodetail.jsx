import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Autodetail() {
  return (
    <div>
         <Card className='shadow text-center p-4 text-dark' style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://mediacity.co.in/crsine/assets/images/services/service-1-2.jpg" />
        <Card.Body>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYoHfDLXwCwNa_kdtODrT2OvCMDI0or7yuSB7zI8WVGiF_ILsQFDx75YRaQ&s" alt="" height={'80px'} width={'110px'}/>
          <Card.Title className='mt-2 fw-bolder fs-3'>Auto Detailing</Card.Title>
          <Card.Text>
          There are not many of passages of lorem ipsum avail isn alteration donationa in form.
          </Card.Text>
          <Link to={'/autodetail'}> <Button variant="primary"> More Details <i class="fa-solid fa-arrow-right"></i></Button></Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Autodetail