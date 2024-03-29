import React from 'react'
import aboutimg from '../Assets/about1.jpg'
import { Link } from 'react-router-dom'
function Message() {
  return (
    <>
       <div className='row' style={{marginTop:'100px', }}>
           <div className="col-md-6">
             <h1 style={{color:'darkblue', marginLeft: '20px',fontWeight:'bolder'}}>It's Time to Come and Clean Your Car</h1>
             <p className='fs-5' style={{marginLeft:'20px', color:'black'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
             <div className='fs-5 text-dark ms-5'>
                <p><i class="fa-solid fa-check" style={{color:" #085ae7"}}></i> We are professional and certified car washers</p>
                <p><i class="fa-solid fa-check" style={{color:" #085ae7"}}></i>We use quality material to clean your cars</p>
                <p><i class="fa-solid fa-check" style={{color:" #085ae7"}}></i>We care about our customers satisfaction</p>
                
                <div  className='row d-flex justify-content-center align-items-center mt-3'>
                     <div className="col-md-3"> <img height={'80px'} width={'80px'} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtlM2Te3jAb5rKA9JeG_Uu0q5d0jWaQss0ez1zQfu6c9xTsfoM" alt="no-image" /></div>
                     <div className="col-md-8">
                        <p className='text-warning fs-4 fw-bolder'>We have 30+ years of experiences for give you better quality results.</p>
                     </div>                   
                </div>

                <div  className='row d-flex justify-content-center align-items-center mt-3'>
                     <div className="col-md-3"> 
                    <Link to={'/login'}> <button type="button" class="btn btn-warning ">Book Now</button></Link>
                     </div>
                     <div className="col-md-8">
                        <p className='text-primary fs-5 fw-bolder'>Call Us Any Time</p>
                        <p className='text-primary fs-5 fw-bolder'><i class="fa-solid fa-phone" style={{color: "#0658e5"}}></i> +91 7346017287</p>
                     </div>                   
                </div>              
             </div>           
           </div>
           <div className="col-md-6 ">
             <div className='d-flex align-items-center justify-content-center'>
               <img className='w-75' src={aboutimg} height={'100%'} width={'100%'} alt="no image"/>    
             </div>
           </div>
       </div>
    </>
  )
}

export default Message