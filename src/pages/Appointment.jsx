import React, { useEffect, useState } from 'react'
import Sedan from '../components/Sedan'
import Hatchback from '../components/Hatchback'
import Suv from '../components/Suv'


function Appointment() {
  
   const [username,setUsername] = useState("")
   useEffect(()=>{
    setUsername(JSON.parse(sessionStorage.getItem('existingUser')).username)
   })

  return (
    <>

         <div className="all-sevices mb-5" style={{ backgroundImage: "url('http://images.dealersites.cardekho.com/2213/uploads/1675210248.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: '0.9', width: '100%', height: '50vh', display: 'flex', alignItems: 'left', justifyContent: 'flex-start', paddingLeft: '5%' }}>          
        </div>

        <div className='ms-5 mb-5'>
          <h1 className='mt-5'>Welcome <span className='text-warning'>{username}</span></h1>
          <h4 className='mt-5'>Select Your Vehicle Type</h4>
        </div>
    
          <div className="container mt-5 mb-5">
            <div className="row text-center">
              
              <div className="col-md-4 sm-12 d-flex align-items-center justify-content-center"><Hatchback/></div>
            
              <div className="col-md-4 sm-12 d-flex align-items-center justify-content-center"><Sedan/></div>
             
              <div className="col-md-4 sm-12 d-flex align-items-center justify-content-center"><Suv/></div>
             
            </div>
          </div>

    </>
  )
}

export default Appointment


{/* <div className='mt-5'>
            <ul className='d-flex justify-content-evenly list-unstyled'>
              <li className='text-center'><img src="https://nationwideautotransportation.com/blog/wp-content/uploads/2023/04/11.jpg " alt="no image" height={'90%'} width={'40%'} /></li>
              <li className='text-center'><img src="https://nationwideautotransportation.com/blog/wp-content/uploads/2023/04/7.jpg " alt="no image" height={'90%'} width={'40%'} /></li>
              <li className='text-center'><img src="https://nationwideautotransportation.com/blog/wp-content/uploads/2023/04/8.jpg  " alt="no image" height={'90%'} width={'40%'} /></li>
            </ul>
          </div> */}



          
          // <div className='mt-5 mb-5'>

          //   <Row className='d-flex justify-content-center'>
          //     <Col md={1}></Col>
          //     <Col md={2}><Hatchback/></Col>
          //     <Col md={1}></Col>
          //     <Col md={2}><Sedan/></Col>
          //     <Col md={1}></Col>
          //     <Col md={2}><Suv/></Col>
          //     <Col md={1}></Col>
          //   </Row>

          // </div>


          /* 
             <div className='mt-5 mb-5'>
            <ul className='d-flex justify-content-evenly list-unstyled'>
              <li className='text-center'><Hatchback/></li>
              <li className='text-center'><Sedan/></li>
              <li className='text-center'><Suv/></li>
            </ul>
          </div>

          */