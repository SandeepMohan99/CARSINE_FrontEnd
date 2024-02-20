import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Autodetailpage() {
  return (
    <>
           <div className="all-sevices mb-5 container " style={{ backgroundImage: "url('https://e1.pxfuel.com/desktop-wallpaper/716/632/desktop-wallpaper-car-detailing-near-me-car-detailing.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: '0.9', width: '100%', height: '110vh', display: 'flex', alignItems: 'left', justifyContent: 'flex-start', paddingLeft: '5%' }}>
             <div>
               <h1 className='mt-5' style={{ color: '#ffffff', opacity: 1,fontSize:'5rem', fontFamily:'"Protest Riot", sans-serif' }}>Auto Detailing</h1>       
              </div>
           </div>


        <div className='container mb-5'>
            <div className="row">
               
                <div className="col-4 mb-5">
                    <div className='p-3 row' style={{backgroundColor:'#EEF3F7'}}>
                        <h1 style={{fontFamily:'"Namdhinggo", serif', fontWeight:'700'}} className=' col-md-12 text-primary'>Categories</h1>
                        <ul className='col-md-12' style={{fontFamily:'"Playfair Display", serif', fontWeight:'700'}}>
                        <ul class="list-unstyled service-details__menu-list text-dark">
                          <li className='p-2 fs-5'><a style={{textDecoration:'none'}} >Ceramic Coating</a></li>
                          <li className='p-2 fs-5'><a style={{textDecoration:'none'}} >PPF Coating</a></li>
                          <li className='p-2 fs-5'><a style={{textDecoration:'none'}} >Car Waxing</a></li>
                          <li className='p-2 fs-5'><a style={{textDecoration:'none'}} >Scrach Removal</a></li>
                          </ ul>
                        </ul>
                        
                    </div>

                    <div className='mt-5' style={{backgroundImage: "url('https://mediacity.co.in/crsine/assets/images/backgrounds/service-bg-1.png')", backgroundSize:'cover', backgroundRepeat:'no-repeat', opacity:'0.9', width:'100%', height:'85%' }}>
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
                    <img src="https://mediacity.co.in/crsine/assets/images/services/service-d-1.jpg" height={'100%'} width={'100%'} alt="no image" />

                  </div>

                  <div className='mt-5'>
                    <h1 style={{fontFamily:'"Namdhinggo", serif', fontWeight:'700'}} className='text-primary'>Auto Detailing</h1>

                    <p className='fs-5 text-dark' style={{fontFamily:'"Annapurna SIL", serif', fontWeight:'500'}}>
                    At Carsine, we take car detailing to the next level, offering a range of premium services that go beyond the basics to ensure your vehicle receives the care it truly deserves. Our meticulous detailing services, including ceramic coating, wax application, and paint protection film, are designed to enhance and protect your car's aesthetics, providing a shield against the elements while giving it a showroom-worthy finish.
                    </p>
                  </div>

                  <div className="row" style={{marginTop:'100px'}}>
                    <div className="col-md-6">
                       <h1 style={{fontFamily:'"Namdhinggo", serif', fontWeight:'700'}} className='text-primary'>Service Benefits</h1>


                       <ul className='fs-5 text-dark' style={{listStyleType:'none',fontFamily:'"Namdhinggo", serif', fontWeight:'700' }}>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Ceramic Coating Excellence</li>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Waxing for Brilliance</li>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Paint Protection Film Expertise</li>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Showroom-Worthy Shine</li>
                        <li className='mt-3'><i class="fa-regular fa-square-check me-2" style={{color: "#74C0FC"}}></i>Gentle on Finish</li>
                       </ul>
                    </div>
                    <div className="col-md-6">
                      <img src="https://cdn.sanity.io/images/n5z5pg8m/production/b882e6c8763250778024ae8cbb3f294d865bed5e-6142x4095.jpg?rect=0,513,6142,3071&w=992&h=496&fit=crop&auto=format" height={'100%'} width={'110%'} alt="no image" />
                    </div>
                  </div>

                  <div className='mt-5 ms-2 col-md-12'>
                      <h1 className='text-center'></h1>

                    <ul  className='text-dark' style={{fontFamily:'"Annapurna SIL", serif', fontWeight:'500'}}>
                        <li className='fs-5'><b>Ceramic Coating Excellence</b>: Treat your car to the ultimate protection with our ceramic coating service. Forming a durable, transparent layer, ceramic coating shields your vehicle from UV rays, oxidation, and environmental contaminants. Enjoy a long-lasting, high-gloss finish that repels water and enhances the depth of your car's color.</li>
                        <li className='fs-5 mt-2'><b>Waxing for Brilliance</b>: Waxing for Brilliance: Our waxing service is a time-tested method to bring out the true brilliance of your vehicle's paint. Applied with precision and care, our wax treatment not only adds a deep, glossy shine but also acts as a protective barrier against minor scratches and swirls.</li>
                        <li className='fs-5 mt-2'><b>Paint Protection Film Expertise</b>: Safeguard your car's exterior with our paint protection film. This virtually invisible layer adds an extra shield against road debris, stone chips, and bug splatter, preserving your car's pristine appearance. Trust Carsine to apply paint protection film with precision, ensuring a seamless and transparent finish.</li>
                        
                    </ul>
                  </div>

                  <div className='mt-5 ms-2 row' style={{backgroundColor:'#EF530F', width:'100%', height:'30vh'}}>
                      <div className=' col-md-6 d-flex justify-content-center align-items-center'>
                        <h5 style={{color:'#ffffff'}}>Easy Online Carwash Booking System</h5>
                      </div>
                      <div className=' col-md-6 d-flex justify-content-center align-items-center'>
                        <Link to={'/login'}><Button style={{backgroundColor:'#02489d'}} size="md">
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

export default Autodetailpage