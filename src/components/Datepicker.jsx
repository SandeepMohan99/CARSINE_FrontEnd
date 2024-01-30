import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
function Datepicker() {
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
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
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
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button className="btn btn-primary" onClick={handleConfirmBooking}>Check Availability</button>
      </div>
    </div>
  </>
  )
}

export default Datepicker