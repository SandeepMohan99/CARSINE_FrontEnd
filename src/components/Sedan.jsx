import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

function Sedan() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Card.Img className='p-4' variant="top" src="https://nationwideautotransportation.com/blog/wp-content/uploads/2023/04/11.jpg" />
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
            <Row className=''>
              <Col>
                  <Form.Control type='text' placeholder="Enter Name" />
              </Col>
              <Col>
                  <Form.Control type='text' placeholder="Mobile Number" />
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col>
                  <Form.Control type='email' placeholder="Enter Email id" />
              </Col>
              <Col>
                  <Form.Control type='text' placeholder="Enter Vehicle Number" />
              </Col>
            </Row>

            <Row className='mt-2 w-100 text-center'>
                <h4>Select Your Time</h4>
            </Row>

            <Row>
            {/* time slot */}
             
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

            <Row >
               
               <div className='mt-3 w-100 text-center'>                
                <h4>Select Your Services</h4>               
               </div>
               
                <Row>
  
                  <div className="input-container ">
                    <label className='me-2'><h5>Select Your Wash :</h5></label>
                    <div className="radio-options mt-3">
                      <label className="radio-option">
                        <input type="checkbox" name="wash" value="Normal Wash" defaultChecked />
                        Normal Wash
                      </label>
                      <label className="radio-option">
                        <input type="checkbox" name="wash" value="Foam Wash" />
                        Foam Wash
                      </label>
                    </div>
                  </div>
                </Row>

                <Row>
  
                  <div className="input-container ">
                    <label className='me-2'><h5>Select AutoDetailing Services :</h5></label>
                    <div className="radio-options mt-3">
                      <label className="radio-option">
                        <input type="checkbox" name="veramic" value="ceramic-coating" />
                        Ceramic Coating
                      </label>
                      <label className="radio-option">
                        <input type="checkbox" name="ppfcoating" value="ppf-coating" />
                        PPF Coating
                      </label>
                      <label className="radio-option">
                        <input type="checkbox" name="carwaxing" value="car-waxing" defaultChecked />
                        Car Waxing
                      </label>
                      <label className="radio-option">
                        <input type="checkbox" name="scrachremoval" value="scrach-removal" />
                        Scrach Removal
                      </label>
                    </div>
                  </div>
                </Row>


                <Row>
  
                  <div className="input-container">
                    <label className='me-2'><h5>Select Interior Services :</h5></label>
                    <div className="radio-options mt-3">
                      <label className="radio-option">
                        <input type="checkbox" name="veramic" value="ceramic-coating" />
                        Basic Interior Cleaning
                      </label>
                      <label className="radio-option">
                        <input type="checkbox" name="carwaxing" value="car-waxing" defaultChecked />
                        Air Vent and Duct Cleaning
                      </label>
                      <label className="radio-option">
                        <input type="checkbox" name="scrachremoval" value="scrach-removal" />
                        Interior Odor Removal
                      </label>
                    </div>
                  </div>
                </Row>
               
            </Row>

        </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Confirm Booking</Button>
        </Modal.Footer>
      </Modal>
    

    </>
  )
}

export default Sedan


/* style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} */