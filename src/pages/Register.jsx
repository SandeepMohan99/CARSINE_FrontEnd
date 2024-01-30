import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import { Button } from 'react-bootstrap';
import { registerAPI } from '../Services/allAPI';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  /* hold value from input box */
  const[userData, setUserData]=useState({
    username:"",
    email:"",
    password:""
  })
  console.log(userData);

  /* navigate hook */

  const navigate = useNavigate()

  /* register function */

  const handleRegister =async(e)=>{
      
    e.preventDefault()
    
    const {username,email,password} = userData

    if (!username || !email || !password) {
      toast.info('Please fill the form completely')
    } else {
     const result = await registerAPI(userData)
     /* console.log(result); */
     
      if (result.status == 200) {
        toast.success(`${result.data.username} is registered successfully`)
        setUserData({
          username:"",
          email:"",
          password:""
        })
        //move to loginpage
        navigate('/login')
      } else {
        alert(result.response.data)
      }
     
  }

  }
  return (
    <>

<MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
      <img alt="no image" src="https://mediacity.co.in/crsine/assets/images/logo-dark.png" width="30%"height="30%" className="d-inline-block align-top"/>{' '}

        <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</h1>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput placeholder='Your Name' id='form1' type='text' className='w-100' value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput placeholder='Your Email' id='form2' type='email' value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput placeholder='Password' id='form3' type='password' value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
        </div>

        {/* <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput placeholder='Repeat your password' id='form4' type='password'/>
        </div> */}

        <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our membership' />
        </div>

        <Button style={{backgroundColor:'#02489d'}} size="lg" onClick={handleRegister}> Register</Button>{' '}
        <p className="mb-5 mt-3 pb-lg-2" style={{color: '#393f81'}}>You Already have account? <a href="/login" style={{color: '#393f81'}}>Login here</a></p>


      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbw9t6KeCufBB7suGuGPHrkcFog-gXYQm5YQ&usqp=CAU' width={'90%'} height={'100%'} fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>

<ToastContainer
            position="top-center"
            autoClose={2000}
            theme="colored"
             />

    </>
  )

}

export default Register