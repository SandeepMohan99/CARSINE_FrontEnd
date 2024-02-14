import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Datepicker from './Datepicker';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBookingAPI } from '../Services/allAPI';
import { addUserContext } from '../Context/ContextShare';




function Hatchback() {

  /* useContext hook */

  const {addUserResponse,setUserResponse} = useContext(addUserContext)


  const [show, setShow] = useState(false);

  const handleClose = () =>{ setShow(false); handleClose1()}
  const handleShow = () => setShow(true);
  
  /* state to store toke for appending with header */
   
   const [token, setToken] = useState("")

   useEffect(()=>{
    setToken(sessionStorage.getItem("token"))
   },[])
   console.log(token); 

  /* state to store booking details */

  const [bookingDetails, setBookingDetails] = useState({

    username:"",
    mobilenumber:"",
    email:"",
    vehiclenumber:"",
    date:"",
    time:"",
    wash:[],
    detail:[],
    interior:[],
    cartype:"Hatch Back"
  }) 

  //console.log(bookingDetails);
   
  const handleClose1 = ()=>{

    setBookingDetails({
      username:"",
      mobilenumber:"",
      email:"",
      vehiclenumber:"",
      date:"",
      time:"",
      wash:[],
      detail:[],
      interior:[],
    })

  }

  const handleAdd = async (e)=>{
        e.preventDefault()

        const{username,mobilenumber,email,vehiclenumber,date,time,wash,detail,interior,cartype}= bookingDetails

        if(!username || !mobilenumber || !email || !vehiclenumber || !date || !time|| !wash|| !detail|| !interior ){
            
          toast.info('Please fill the form completely')    
        }

        else{
              
            /* reqbody */
            /* if there is any any uploading content from the system
            we should send the body in the form of form data */

           const reqBody = new FormData()

            /* add value to the form data using append() */
            
            reqBody.append("username",username)
            reqBody.append("mobilenumber",mobilenumber)
            reqBody.append("email",email)
            reqBody.append("vehiclenumber",vehiclenumber)
            reqBody.append("date",date)
            reqBody.append("time",time)
            reqBody.append("wash",wash)
            reqBody.append("detail",detail)
            reqBody.append("interior",interior)
            reqBody.append("cartype",cartype)
           if(token) {
            
                const reqHeader = {          
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`            
                }
                const result = await addBookingAPI(reqBody,reqHeader)
                console.log(result);
                if (result.status===200) {
                  toast.success('Booking Successfully Added')
                   handleClose()
                   setUserResponse(result.data)
                } else {
                  console.log(result);
                  alert('result.response.data')
                }

            }
        }

  }


  /* time slot selection */

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault()
    const day = ('0' + selectedDate.getDate()).slice(-2); // Ensure two digits for day
    const month = ('0' + (selectedDate.getMonth() + 1)).slice(-2); // Ensure two digits for month (adding 1 because months are zero-indexed)
    const year = selectedDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    // console.log('Booking Date and Time:', bookingDateTime);

    setBookingDetails(prevState => ({
      ...prevState,
      date: formattedDate,
      time: selectedTimeSlot
    }));
    console.log('Booking Date:', formattedDate);
    console.log('Booking Time:', selectedTimeSlot);
  };

  // Function to disable Sundays
  const isSunday = (date) => {
    return date.getDay() === 0;
  };

  // Function to disable dates more than 7 days ahead
  const isDateOutOfRange = (date) => {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    return date > nextWeek;
  };

  // Custom time slots
  const timeSlots = [
    { label: '9:00 AM - 11:00 AM', value: '09:00 AM' },
    { label: '11:00 AM - 1:00 PM', value: '11:00 AM' },
    { label: '1:00 PM - 3:00 PM', value: '1:00 PM' },
    { label: '3:00 PM - 5:00 PM', value: '3:00 PM' }
  ];


 
  return (
     
    <>

    <Card className='shadow' style={{ width: '20rem' }}>
      <Card.Img className='p-4' variant="top" src="https://nationwideautotransportation.com/blog/wp-content/uploads/2023/04/7.jpg" />
      <Card.Body>
      <Card.Title className='fs-3 '>Our Pricing</Card.Title>
      <Card.Text>
        <ul className='text-start'>
            <li>Basic Wash Starts From ₹ 699</li>
            <li>Express Interior Cleaning Starts From ₹ 499</li>
            <li>PPF Starts From ₹ 15,000</li>
        </ul>
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>Book Now</Button>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Booking Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form className="border border-seconday rounded p-3">
              <Row>
                  <Col>
                    <Form.Control type='text' placeholder="Enter Name" value={bookingDetails.username} onChange={(e) => setBookingDetails({ ...bookingDetails, username: e.target.value })} />
                  </Col>
                  <Col>
                    <Form.Control type='text' placeholder="Mobile Number" pattern="[0-9]{10}" title="Mobile number should contain only digits (0-9) and should be 10 characters long." value={bookingDetails.mobilenumber} onChange={(e) => setBookingDetails({ ...bookingDetails, mobilenumber: e.target.value })} isInvalid={bookingDetails.mobilenumber && !/^[0-9]{10}$/.test(bookingDetails.mobilenumber)} />
                    <Form.Control.Feedback type="invalid">Please enter a valid 10-digit mobile number.</Form.Control.Feedback>
                  </Col>
                </Row>

                <Row className='mt-3'>
                  <Col>
                  <Form.Control type='email' placeholder="Enter Email id" value={bookingDetails.email} onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })} isInvalid={bookingDetails.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingDetails.email)} />
                  <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                  </Col>
                  <Col>
                  <Form.Control
                        type='text'
                        placeholder="Enter Vehicle Number (KL-08-AZ-1234)"
                        pattern="[A-Za-z0-9]*"
                        title="Vehicle number should contain only alphabets and digits (0-9)."
                        value={bookingDetails.vehiclenumber}
                        onChange={(e) => setBookingDetails({ ...bookingDetails, vehiclenumber: e.target.value })}
                        isInvalid={bookingDetails.vehiclenumber && !/^[A-Z]{2}[ -]?[0-9]{2}[ -]?[A-Z]{1,2}[ -]?[0-9]{4}$/.test(bookingDetails.vehiclenumber)}
                      />
                    <Form.Control.Feedback type="invalid">Please enter a valid vehicle number.</Form.Control.Feedback>
                  </Col>
                </Row>


            <Row className='mt-2 w-100 text-center'>
                <h4>Select Your Time</h4>
            </Row>

              {/* time slot */}
            <Row>
           
             
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ marginRight: '20px' }}>
                    <label className='me-2'>Select Date:</label>
                    <DatePicker className='p-2 rounded'
                      selected={selectedDate}
                      onChange={handleDateChange}
                      minDate={new Date()}
                      maxDate={(new Date()).setDate((new Date()).getDate() + 7)}
                        excludeDates={[new Date()]} // Exclude today if needed
                        dateFormat="dd/MM/yyyy"
                        disabledKeyboardNavigation 
                      />
                  </div>

                  <div>
                      <label className='me-2'>Select Time Slot:</label>
                      <select className='p-2 rounded' value={selectedTimeSlot} onChange={(e) => setSelectedTimeSlot(e.target.value)}>
                      <option value="">Select</option>
                      {timeSlots.map((slot, index) => (
                          <option key={index} value={slot.value}>{slot.label}</option>
                        ))}
                      </select>
                  </div>
                  <div >
                  <button className="btn btn-primary ms-3 btn-sm" onClick={handleConfirmBooking}>Check Availability</button>
                </div>
            </div>


              
            </Row>
    
            {/* Select Your Services */}
            <Row >
               
               <div className='mt-3 w-100 text-center'>                
                <h4>Select Your Services</h4>               
               </div>
               
                    {/* car wash */}
                    <Row>
      
                      <div className="input-container ">
                        <label className='me-2'><h5>Select Your Wash :</h5></label>
                        <div className="radio-options mt-3">
                          <label className="radio-option">
                                <input 
                                type="checkbox" 
                                name="normalwash" 
                                value="Normal-Wash" 
                                onChange={(e) => {
                                  const isChecked = e.target.checked;
                                  const value = e.target.value;

                                  setBookingDetails(prevState => {
                                    if (isChecked) {
                                      // Add the value to the wash array if the checkbox is checked
                                      return { ...prevState, wash: [...prevState.wash, value] };
                                    } else {
                                      // Remove the value from the wash array if the checkbox is unchecked
                                      return { ...prevState, wash: prevState.wash.filter(item => item !== value) };
                                    }
                                  });
                                }}
                              />
                            Normal Wash
                          </label>
                          <label className="radio-option">
                          <input 
                                type="checkbox" 
                                name="formwash" 
                                value="Form-wash" 
                                onChange={(e) => {
                                  const isChecked = e.target.checked;
                                  const value = e.target.value;

                                  setBookingDetails(prevState => {
                                    if (isChecked) {
                                      // Add the value to the wash array if the checkbox is checked
                                      return { ...prevState, wash: [...prevState.wash, value] };
                                    } else {
                                      // Remove the value from the wash array if the checkbox is unchecked
                                      return { ...prevState, wash: prevState.wash.filter(item => item !== value) };
                                    }
                                  });
                                }}
                              />
                            Foam Wash
                          </label>
                        </div>
                      </div>
                    </Row>
                    
                    {/* car exterior cleaning */}
                    <Row>
                          <div className="input-container ">
                            <label className='me-2'><h5>Select AutoDetailing Services :</h5></label>
                            <div className="radio-options mt-3">
                              <label className="radio-option">
                                <input 
                                  type="checkbox" 
                                  name="ceramic" 
                                  value="Ceramic-Coating" 
                                  onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    const value = e.target.value;

                                    setBookingDetails(prevState => {
                                      if (isChecked) {
                                        // Add the value to the detail array if the checkbox is checked
                                        return { ...prevState, detail: [...prevState.detail, value] };
                                      } else {
                                        // Remove the value from the detail array if the checkbox is unchecked
                                        return { ...prevState, detail: prevState.detail.filter(item => item !== value) };
                                      }
                                    });
                                  }}
                                />
                                Ceramic Coating
                              </label>
                              <label className="radio-option">
                                <input 
                                  type="checkbox" 
                                  name="PPF Coating" 
                                  value="PPF-Coating" 
                                  onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    const value = e.target.value;

                                    setBookingDetails(prevState => {
                                      if (isChecked) {
                                        // Add the value to the detail array if the checkbox is checked
                                        return { ...prevState, detail: [...prevState.detail, value] };
                                      } else {
                                        // Remove the value from the detail array if the checkbox is unchecked
                                        return { ...prevState, detail: prevState.detail.filter(item => item !== value) };
                                      }
                                    });
                                  }}
                                />
                                PPF Coating
                              </label>
                              <label className="radio-option">
                                <input 
                                  type="checkbox" 
                                  name="CarWaxing" 
                                  value="Car-Waxing" 
                                  onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    const value = e.target.value;

                                    setBookingDetails(prevState => {
                                      if (isChecked) {
                                        // Add the value to the detail array if the checkbox is checked
                                        return { ...prevState, detail: [...prevState.detail, value] };
                                      } else {
                                        // Remove the value from the detail array if the checkbox is unchecked
                                        return { ...prevState, detail: prevState.detail.filter(item => item !== value) };
                                      }
                                    });
                                  }}
                                />
                                Car Waxing
                              </label>
                              <label className="radio-option">
                                <input 
                                  type="checkbox" 
                                  name="Scrach Removal" 
                                  value="Scrach-Removal" 
                                  onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    const value = e.target.value;

                                    setBookingDetails(prevState => {
                                      if (isChecked) {
                                        // Add the value to the detail array if the checkbox is checked
                                        return { ...prevState, detail: [...prevState.detail, value] };
                                      } else {
                                        // Remove the value from the detail array if the checkbox is unchecked
                                        return { ...prevState, detail: prevState.detail.filter(item => item !== value) };
                                      }
                                    });
                                  }}
                                />
                                Scratch Removal
                              </label>
                            </div>
                          </div>
                    </Row>

                    {/* car interior */}
                    <Row>
                        <div className="input-container">
                          <label className='me-2'><h5>Select Interior Services :</h5></label>
                          <div className="radio-options mt-3">
                            <label className="radio-option">
                              <input 
                                type="checkbox" 
                                name="Inteior Cleaning" 
                                value="Inteior-Cleaning" 
                                onChange={(e) => {
                                  const isChecked = e.target.checked;
                                  const value = e.target.value;

                                  setBookingDetails(prevState => {
                                    if (isChecked) {
                                      // Add the value to the interior array if the checkbox is checked
                                      return { ...prevState, interior: [...prevState.interior, value] };
                                    } else {
                                      // Remove the value from the interior array if the checkbox is unchecked
                                      return { ...prevState, interior: prevState.interior.filter(item => item !== value) };
                                    }
                                  });
                                }}
                              />
                              Basic Interior Cleaning
                            </label>
                            <label className="radio-option">
                              <input 
                                type="checkbox" 
                                name="AC Duct Cleaning" 
                                value="AC-Duct-Cleaning" 
                                onChange={(e) => {
                                  const isChecked = e.target.checked;
                                  const value = e.target.value;

                                  setBookingDetails(prevState => {
                                    if (isChecked) {
                                      // Add the value to the interior array if the checkbox is checked
                                      return { ...prevState, interior: [...prevState.interior, value] };
                                    } else {
                                      // Remove the value from the interior array if the checkbox is unchecked
                                      return { ...prevState, interior: prevState.interior.filter(item => item !== value) };
                                    }
                                  });
                                }}
                              />
                              Air Vent and Duct Cleaning
                            </label>
                            <label className="radio-option">
                              <input 
                                type="checkbox" 
                                name="Odour Removal" 
                                value="Odour-Removal" 
                                onChange={(e) => {
                                  const isChecked = e.target.checked;
                                  const value = e.target.value;

                                  setBookingDetails(prevState => {
                                    if (isChecked) {
                                      // Add the value to the interior array if the checkbox is checked
                                      return { ...prevState, interior: [...prevState.interior, value] };
                                    } else {
                                      // Remove the value from the interior array if the checkbox is unchecked
                                      return { ...prevState, interior: prevState.interior.filter(item => item !== value) };
                                    }
                                  });
                                }}
                              />
                              Interior Odor Removal
                            </label>
                          </div>
                        </div>
                    </Row>              
            </Row>

        </Form>
          
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleClose1}>
            Clear
          </Button>
          <Button variant="primary" onClick={handleAdd}>Confirm Booking</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
            position="top-center"
            autoClose={2000}
            theme="colored"
             />
          

    </>

    
  )
}

export default Hatchback

/* <Form>
            <Row className=''>
              <Col>
                  <Form.Control className='p-3' type='text' placeholder="Enter Name" />
              </Col>
              <Col>
                  <Form.Control className='p-3 ms-3' type='text' placeholder="Mobile Number" />
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col>
                  <Form.Control className='p-3' type='text' placeholder="Enter Email" />
              </Col>
              <Col>
                  <Form.Control className='p-3 ms-3' type='text' placeholder="Mobile Number" />
              </Col>
            </Row>
        </Form> */


        /* <div className='row mt-3 p-2'>
            <div className='col-lg-6'>
              <div className="mb-3 mt-3 w-100">
                <input type="text" className='form-control' placeholder='Enter Name' />
              </div>
            </div>
            <div className='col-6'>
            <div className="mb-3  mt-3 w-100">
              <input type="text" className='form-control' placeholder='Vehicle Number' />
              </div>
            </div>
          </div> */