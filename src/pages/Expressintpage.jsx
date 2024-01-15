import React from 'react'
import Button from 'react-bootstrap/Button';

function Expressintpage() {
  return (
    <>
           <div className="all-sevices mb-5" style={{ backgroundImage: "url('https://www.torquedetail.com/cdn/shop/articles/best-cleaner-for-car-interior-plastic-results-mind-blown-422768_1024x1024.jpg?v=1651542911')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: '0.9', width: '100%', height: '110vh', display: 'flex', alignItems: 'left', justifyContent: 'flex-start', paddingLeft: '5%' }}>
             <div>
               <h1 className='mt-5' style={{ color: '#02489d', opacity: 1,fontSize:'5rem' }}>Express Interior Cleaning</h1>       
              </div>
           </div>


        <div className='container mb-5'>
            <div className="row">
               
                <div className="col-4 mb-5">
                    <div className='p-3' style={{backgroundColor:'#EEF3F7'}}>
                        <h1 className='ms-4'>Categories</h1>
                     
                        <ul class="list-unstyled service-details__menu-list">
                          <li className='p-2 fs-4'><a style={{textDecoration:'none'}} href="/crsine/servicedetails"></a>Basic Interior Cleaning</li>
                          <li className='p-2 fs-4'><a style={{textDecoration:'none'}} href="/crsine/servicedetails"></a>Deep Interior Cleaning</li>
                          <li className='p-2 fs-4'><a style={{textDecoration:'none'}} href="/crsine/servicedetails"></a>Dashboard and Console Detailing</li>
                          <li className='p-2 fs-4'><a style={{textDecoration:'none'}} href="/crsine/servicedetails"></a>Air Vent and Duct Cleaning</li>
                          <li className='p-2 fs-4'><a style={{textDecoration:'none'}} href="/crsine/servicedetails"></a>Carpet and Floor Mat Cleaning</li>
                          <li className='p-2 fs-4'><a style={{textDecoration:'none'}} href="/crsine/servicedetails"></a>Interior Odor Removal</li>
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
                    <h1 className=''>Express Interior Cleaning</h1>

                    <p className='fs-4'>
                    At Carsine, we take car detailing to the next level, offering a range of premium services that go beyond the basics to ensure your vehicle receives the care it truly deserves. Our meticulous detailing services, including ceramic coating, wax application, and paint protection film, are designed to enhance and protect your car's aesthetics, providing a shield against the elements while giving it a showroom-worthy finish.
                    </p>
                  </div>

                  <div className="row" style={{marginTop:'100px'}}>
                    <div className="col-6">
                       <h1>Service Benefits</h1>

                       <p className='fs-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

                       <ul className='fs-5' style={{listStyleType:'none'}}>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Basic Interior Cleaning</li>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Deep Interior Cleaning</li>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Dashboard and Console Detailing</li>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Air Vent and Duct Cleaning</li>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Interior Odor Removal</li>
                       </ul>
                    </div>
                    <div className="col-6">
                      <img src="https://mediacity.co.in/crsine/assets/images/services/service-d-2.jpg" height={'100%'} alt="no image" />
                    </div>
                  </div>

                  <div className='mt-5 ms-2'>
                      <h1 className='text-center'></h1>

                    <ul>
                        <li className='fs-5'><b>Basic Interior Cleaning</b>: A standard interior cleaning service that includes vacuuming, dusting, and wiping down surfaces. It focuses on removing surface-level dirt and maintaining a tidy interior.</li>
                        <li className='fs-5 mt-2'><b>Deep Interior Cleaning</b>:This service involves a more intensive cleaning process, reaching into crevices and hard-to-reach areas. It's designed to eliminate stubborn stains, dirt, and grime, providing a more thorough cleaning compared to the basic option.</li>
                        <li className='fs-5 mt-2'><b>Dashboard and Console Detailing</b>:Focusing on the central elements of the car's interior, this service includes cleaning and polishing the dashboard and console areas. It helps maintain a clean and attractive appearance in the driver's cockpit.</li>
                        <li className='fs-5 mt-2'><b>Window and Glass Cleaning</b>:Concentrating on the windows and glass surfaces, this service ensures a streak-free and clear view. It involves cleaning both the interior and exterior sides of the windows.</li>
                        
                    </ul>
                  </div>

                  <div className='mt-5 ms-2 d-flex justify-content-center align-items-center' style={{backgroundColor:'#EF530F', width:'105%', height:'30vh'}}>
                      <div className=' d-flex'>
                        <h2 style={{color:'#ffffff'}} className='me-3'>Easy Car Detailing Booking System</h2>
                      <Button style={{backgroundColor:'#02489d'}} size="lg">
                             Book Appoinment
                           </Button>{' '}
                      </div>
                  </div>
                </div>                
            </div>
        </div>
        
    </>
  )
}

export default Expressintpage