import React from 'react'
import Servicecard from './Servicecard'
import Autodetail from './Autodetail'
import Expressint from './Expressint'

function Service() {
  return (
    <>
       <div className="all-sevices mt-5 mb-5" style={{ backgroundImage: "url('https://mediacity.co.in/crsine/assets/images/backgrounds/service-bg-1.png')",backgroundSize:'cover', backgroundRepeat:'no-repeat', opacity:'0.9', width:'100%', height:'110vh'}}>

            <div className='d-flex justify-content-center align-items-center'>
              <h1 className='text-center mt-5 text-warning fw-bolder fs-1'>Services We Are Providing Our Customers</h1>
            </div>

              <div className="d-flex justify-content-center align-items-center mt-5">
                 
                 <div className='ms-5' >
                 <Servicecard/>
                 </div>
                
                <div className='ms-5' >
                <Autodetail/>
                </div>

                <div className='ms-5' >
                <Expressint/>
                </div> 
                
              </div>

        </div>
    </>
  )
}

export default Service