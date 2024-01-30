import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link, json, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI } from '../Services/allAPI';

function Login() {
  
  /*state to store userdata  */
  const [userData, setUserData] = useState({
    email:"",
    password:""
  })
  console.log(userData);
  
  /* hooke to navigate */

  const navigate = useNavigate()


  /* login function */

  const handleLogin =async(e)=>{
   
    e.preventDefault()

    const {email,password} = userData

    if (!email || !password) {
      toast.info('Please fill the form completely')
    }
    else{
      const result = await loginAPI(userData)
      console.log(result);

      if (result.status===200) {
        toast.success('Login Successfull')

        /* store  in session storage */
        /* 1st argument is variable in stringdatatype  */
        /* 2nd argument is value from the result*/
        /* data here server is json we need to convert to string */
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        /* token is also stored in separate key */
        sessionStorage.setItem("token",result.data.token)
        
        /*to change all the values to null after login*/
        setUserData({
          email:"",
          password:""
        })
    
        /* navigate to home */
        navigate('/appointment')
        
      } else {
        alert(result.response.data)
      }
    }
  }

  return (
    <>
          <MDBContainer className="my-5">

            <MDBCard>
                 <MDBRow className='g-0'>

                    <MDBCol md='6'>
                      <MDBCardImage src='https://media.istockphoto.com/id/1287044692/photo/worker-washing-red-car-with-sponge-on-a-car-wash.jpg?s=612x612&w=0&k=20&c=_6WO9k1qkDub5CAEQgnORMduUoQJkU6w3jjVQTdTdwQ='height={'100%'} alt="login form" className='rounded-start w-100'/>
                    </MDBCol>

                  <MDBCol md='6'>

                  <MDBCardBody className='d-flex flex-column'>

                       <div className='d-flex flex-row mt-2'>
                         {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/> */}
                          <img alt="no image" src="https://mediacity.co.in/crsine/assets/images/logo-dark.png" width="40%"height="40%" className="d-inline-block align-top"/>{' '}
                       </div>

                       <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                       <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
                       <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}/>

                        <Button onClick={handleLogin} className='w-50' style={{backgroundColor:'#02489d' }} size='lg'>Login</Button>
                        <a className="small text-muted mt-3" href="#!">Forgot password?</a>
                        <p className="mb-5 pb-lg-2 mt-3" style={{color: '#393f81'}}>Don't have an account? <Link to={'/register'}>Register</Link></p>

                       <div className='d-flex flex-row justify-content-start'>
                       <a href="#!" className="small text-muted me-1">Terms of use.</a>
                       <a href="#!" className="small text-muted">Privacy policy</a>
                       </div>

                 </MDBCardBody>
                 </MDBCol>

                </MDBRow>
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

export default Login

/* style={{color: '#393f81'}} */