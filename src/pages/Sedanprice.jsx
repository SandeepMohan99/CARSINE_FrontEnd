import React from 'react'
import Card from 'react-bootstrap/Card';
function Sedanprice() {
  return (
    <>

<div className="container mt-5 mb-5">
            <h1 className='mt-5 mb-5'>Our Pricing</h1>
            <div className="row">
                <div className="col-md-3 sm-12">
                        <Card className='shadow' style={{ width: '16rem', height:'15rem'}}>
                        <Card.Img className='p-4' variant="top" src="https://nationwideautotransportation.com/blog/wp-content/uploads/2023/04/11.jpg" />
                        </Card>
                </div>
                <div className="col-md-3 sm-12">
                <Card className='shadow' style={{ width: '16rem', height:'15rem' }}>
                <Card.Body>
                <Card.Title className='fs-4 text-center'>Wash</Card.Title>
                <Card.Text>
                    <ul className='text-start'>
                        <li>Normal Wash : ₹ 599</li>
                        <li>Form Wash :₹ 799</li>                     
                    </ul>
                    </Card.Text>
                </Card.Body>
                </Card>
                </div>
                <div className="col-md-3 sm-12">
                <Card className='shadow' style={{ width: '16rem', height:'15rem' }}>
                <Card.Body>
                <Card.Title className='fs-4 text-center'>Auto Detailing</Card.Title>
                <Card.Text>
                    <ul className='text-start'>
                        <li>Ceramic Coating: ₹ 9000</li>
                        <li>PPF Coating: ₹ 18,000</li>  
                        <li>Car Waxing: ₹ 6000</li> 
                        <li>Scrach Removal: ₹ 4000</li>                         
                    </ul>
                    </Card.Text>
                </Card.Body>
                </Card>
                </div>
                <div className="col-md-3 sm-12">
                <Card className='shadow' style={{ width: '16rem', height:'15rem' }}>
                <Card.Body>
                <Card.Title className='fs-4 text-center'>Express Interior</Card.Title>
                <Card.Text>
                    <ul className='text-start'>
                        <li>Basic Interior Cleaning: ₹ 599</li>
                        <li>Deep Interior Cleaning: ₹ 899</li>  
                        <li>AC Duct Cleaning: ₹ 499</li> 
                        <li>Interior Odor Removal: ₹ 399</li>                        
                    </ul>
                    </Card.Text>
                </Card.Body>
                </Card>
                </div>
            </div>
            <p className='mt-5'>* Prices can be varied depending upon vehicle condition</p> 
        </div>
        

    </>
  )
}

export default Sedanprice