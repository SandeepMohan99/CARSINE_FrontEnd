import React from 'react'
import Servicecard from './Servicecard'
import Autodetail from './Autodetail'
import Expressint from './Expressint'

function Service() {
  return (
    <>
       <div className="all-sevices mt-5 mb-5">

            <div className='d-flex justify-content-center align-items-center'>
              <h1 className='text-center mt-5 text-warning fw-bolder fs-1'>Services We Are Providing Our Customers</h1>
            </div>

              <div className="container mt-5 mb-5">
                <div className="row text-center">
                   
                  <div className="col-md-4 sm-12 mt-3 d-flex align-items-center justify-content-center" >
                  <Servicecard/>
                  </div>
                  
                  <div className="col-md-4 sm-12 mt-3 d-flex align-items-center justify-content-center" >
                  <Autodetail/>
                  </div>
  
                  <div className="col-md-4 sm-12 mt-3 d-flex align-items-center justify-content-center" >
                  <Expressint/>
                  </div> 
                  
                </div>
              </div>

        </div>
    </>
  )
}

export default Service


/* 
style={{ backgroundImage: "url('https://mediacity.co.in/crsine/assets/images/backgrounds/service-bg-1.png')",backgroundSize:'cover', backgroundRepeat:'no-repeat', opacity:'0.9', width:'100%', height:'120vh',}}
*/
 