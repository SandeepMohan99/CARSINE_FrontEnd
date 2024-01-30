import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Servicepage() {
  return (
    <>
        <div className="all-sevices mb-5" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwd2FzaHxlbnwwfHwwfHx8MA%3D%3D')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: '0.9', width: '100%', height: '110vh', display: 'flex', alignItems: 'left', justifyContent: 'flex-start', paddingLeft: '5%' }}>
             <div>
               <h1 className='mt-5' style={{ color: '#ffffff', opacity: 1,fontSize:'5rem' }}>Form Wash</h1>       
              </div>
        </div>
        <div className='container mb-5'>
            <div className="row">
               
                <div className="col-4 mb-5">
                    <div className='p-3' style={{backgroundColor:'#EEF3F7'}}>
                        <h1 className='ms-4'>Categories</h1>
                        <ul>
                        <ul class="list-unstyled service-details__menu-list">
                          <li className='p-2 fs-4'><a style={{textDecoration:'none'}} href="/crsine/servicedetails">Normal Wash</a></li>
                          <li className='p-2 fs-4'><a style={{textDecoration:'none'}} href="/crsine/servicedetails">Form Wash</a></li>
                          <li className='p-2 fs-4'><a style={{textDecoration:'none'}} href="/crsine/servicedetails">Interior Polish</a></li>
                          <li className='p-2 fs-4'><a style={{textDecoration:'none'}} href="/crsine/servicedetails">Tire Shine</a></li>
                          <li className='p-2 fs-4'><a style={{textDecoration:'none'}} href="/crsine/servicedetails">Engine Wash</a></li></ ul>
                        </ul>
                        
                    </div>

                    <div className='mt-5' style={{backgroundImage: "url('https://mediacity.co.in/crsine/assets/images/backgrounds/service-bg-1.png')", backgroundSize:'cover', backgroundRepeat:'no-repeat', opacity:'0.9', width:'100%', height:'50%' }}>
                      <div className='' style={{backgroundColor:'#072070', width:'100%', height:'100%', opacity:'0.8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className='text-center'>
                           <h1 className='' style={{ color: '#ffffff', opacity: 1 }}>Get Help</h1>
                           <p className='mt-2 fs-5' style={{ color: '#ffffff', opacity: 1 }}>Speak with a human to filling out a form? call corporate office and we will connect you with a team member.</p>
                           <h1 style={{ color: '#ffffff', opacity: 1 }}>92 666 8888 00</h1>                          
                           <h4 style={{ color: '#ffffff', opacity: 1 }}><i class="fa-solid fa-phone"></i> Call Us</h4>     
                        </div>
                     </div>
                    </div>
                </div>
                
                <div className="col-8">

                  <div>  
                    <img src="https://mediacity.co.in/crsine/assets/images/services/service-d-1.jpg" alt="" />

                  </div>

                  <div className='mt-5'>
                    <h1 className=''>Form Wash</h1>

                    <p className='fs-4'>
                    At Carsine, we understand the importance of maintaining your vehicle's pristine appearance, which is why we proudly introduce Form Wash  our premium car washing service that goes beyond the ordinary. Form Wash is designed to elevate your car care experience, ensuring a thorough and effective cleansing that leaves your vehicle gleaming with a showroom-worthy shine.
                    </p>
                  </div>

                  <div className="row" style={{marginTop:'100px'}}>
                    <div className="col-6">
                       <h1>Service Benefits</h1>

                       <p className='fs-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

                       <ul className='fs-5' style={{listStyleType:'none'}}>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Advanced Cleaning Technology.</li>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Environmentally Friendly Solutions</li>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Meticulous Attention to Detail</li>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Showroom-Worthy Shine</li>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Gentle on Finish</li>
                       </ul>
                    </div>
                    <div className="col-6">
                      <img src="https://mediacity.co.in/crsine/assets/images/services/service-d-2.jpg" height={'100%'} alt="no image" />
                    </div>
                  </div>

                  <div className='mt-5 ms-2'>
                      <h1 className='text-center'></h1>

                    <ul>
                        <li className='fs-5'><b>Normal Wash</b>: At Carsine, our Normal Wash is more than just a routine cleaning; it's a commitment to keeping your vehicle looking its best. Using premium cleaning agents and state-of-the-art equipment, we ensure a thorough wash that removes dirt and grime, leaving your car refreshed and revitalized..</li>
                        <li className='fs-5 mt-2'><b>Form Wash</b>:Experience the next level of car cleaning with our Form Wash service at Carsine. Designed for those who seek perfection, Form Wash combines advanced technology and eco-friendly solutions to provide a meticulous cleanse. Your vehicle will not just be clean; it will shine with a showroom-worthy brilliance.</li>
                        <li className='fs-5 mt-2'><b>Interior Polish</b>:Step into a refreshed and revitalized interior with our Interior Polish service at Carsine. Our skilled team pays attention to every detail, from upholstery to dashboard, ensuring a spotless and polished interior. Say goodbye to dust and hello to a clean, inviting cabin that complements your driving experience.</li>
                        
                    </ul>
                  </div>


                  <div className='mt-5 ms-2 d-flex justify-content-center align-items-center' style={{backgroundColor:'#EF530F', width:'105%', height:'30vh'}}>
                      <div className=' d-flex'>
                        <h2 style={{color:'#ffffff'}} className='me-3'>Easy Online Carwash Booking System</h2>
                      <Link to={'/login'}><Button style={{backgroundColor:'#02489d'}} size="lg">
                             Book Appoinment
                           </Button>{' '}</Link>
                      </div>
                  </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Servicepage


/* 
<h3 class="service-details__menu-title">Categories</h3>
                        <ul class="list-unstyled service-details__menu-list">
                          <li><a href="/crsine/servicedetails">Full Service Wash</a></li>
                          <li><a href="/crsine/servicedetails">Auto Detailing</a></li><li><a href="/crsine/servicedetails">Express Interior</a></li><li><a href="/crsine/servicedetails">Interior Polish</a></li><li><a href="/crsine/servicedetails">Tire Shine</a></li><li><a href="/crsine/servicedetails">Engine Wash</a></li></ ul>
*/