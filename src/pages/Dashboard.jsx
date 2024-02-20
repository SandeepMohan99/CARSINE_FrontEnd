import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteBookingAPI, userBookingAPI } from '../Services/allAPI';
import { addUserContext } from '../Context/ContextShare';

function Dashboard() {

  /* usecontext hook */
  /* const {addUserResponse,setUserResponse} = useContext(addUserContext) */

  const [userData,setUserData] = useState([])

  const getUserData = async()=>{

    const token = sessionStorage.getItem("token")
    console.log(token);
    const reqHeader = {          
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`            
      }
    const result = await userBookingAPI(reqHeader)
    console.log(result.data);
    setUserData(result.data)
  }


  /* delete user */

  const handleDelete = async(id)=>{
   
    const token = sessionStorage.getItem("token")
    const reqHeader = {          
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`            
      }

      const result = await deleteBookingAPI(id,reqHeader)
      console.log(result);
      if (result.status===200) {
        getUserData()
      }
      else{
        alert(result)
      }
  }   

  useEffect(()=>{
   getUserData()
  },[])
  return (
    <>
      <div className='container mt-5 mb-5'>       
          <h1 className='text-warning'>Welcome</h1>            
      </div>

      <div className='container'>

      <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th>User Name</th>
          <th>Mobile Number</th>
          <th>Email</th>
          <th>Vehicle Number</th>
          <th>Slot</th>
          <th>Vehicle Type</th>
          <th>Services</th>
          <th>Cancel</th>
        </tr>
      </thead>
      <tbody>
        {userData?.length>0?
        userData.map((item)=>(
          <tr>
            <td>{item.username}</td>
            <td>{item.mobilenumber}</td>
            <td>{item.email}</td>
            <td>{item.vehiclenumber}</td>
            <td>
              <ul>
                <li>Date : {item.date}</li>
                <li>Time : {item.time}</li>
              </ul>
            </td>
            <td>{item.cartype}</td>
            <td>
              <ul>
                <li>Wash : {item.wash}</li>
                <li>Auto Detailing: {item.detail}</li>
                <li>Interior: {item.interior}</li>
              </ul>
            </td>
        
            <td className='text-center'><button className="btn" onClick={()=>handleDelete(item._id)} ><i class="fa-solid fa-trash text-danger"></i></button></td>
          </tr>
        )):
         <tr>
          <td className='text-center' colSpan={8}>
          No Bookings Yet
          </td>
         </tr>
        }
      </tbody>
    </Table>

      </div>
    </>
  )
}

export default Dashboard


/* <td className='text-center'><button className="btn" ><i class="fa-solid fa-trash text-danger"></i></button></td> */