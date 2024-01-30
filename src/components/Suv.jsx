import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Suv() {
  return (
    <>

    <Card className='shadow' style={{ width: '20rem' }}>
      <Card.Img className='p-4' variant="top" src="https://nationwideautotransportation.com/blog/wp-content/uploads/2023/04/8.jpg  " />
      <Card.Body>
      <Card.Title className='fs-3 '>Our Pricing</Card.Title>
      <Card.Text>
        <ul className='text-start'>
            <li>Basic Wash Starts From ₹ 899</li>
            <li>Express Interior Cleaning Starts From ₹ 699</li>
            <li>PPF Starts From ₹ 20,000</li>
        </ul>
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>

    </>
  )
}

export default Suv