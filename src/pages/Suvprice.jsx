import React from 'react'
import Card from 'react-bootstrap/Card';
function Suvprice() {
  return (
    <>
     <div className="container mt-5 mb-5">
            <h1 className='mt-5 mb-5'>Our Pricing</h1>
            <div className="row">
                <div className="col-md-3 sm-12">
                        <Card className='shadow' style={{ width: '16rem', height:'15rem'}}>
                        <Card.Img className='p-4' variant="top" src="https://nationwideautotransportation.com/blog/wp-content/uploads/2023/04/8.jpg" />
                        </Card>
                </div>
                <div className="col-md-3 sm-12">
                <Card className='shadow' style={{ width: '16rem', height:'15rem' }}>
                <Card.Body>
                <Card.Title className='fs-4 text-center'>Wash</Card.Title>
                <Card.Text>
                    <ul className='text-start'>
                        <li>Normal Wash : ₹ 799</li>
                        <li>Form Wash :₹ 899</li>                     
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
                        <li>Ceramic Coating: ₹ 10,000</li>
                        <li>PPF Coating: ₹ 20,000</li>  
                        <li>Car Waxing: ₹ 7000</li> 
                        <li>Scrach Removal: ₹ 5000</li>                         
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
                        <li>Basic Interior Cleaning: ₹ 799</li>
                        <li>Deep Interior Cleaning: ₹ 999</li>  
                        <li>AC Duct Cleaning: ₹ 599</li> 
                        <li>Interior Odor Removal: ₹ 499</li>                        
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

export default Suvprice