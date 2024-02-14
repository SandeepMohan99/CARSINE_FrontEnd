
/* register api */

import { base_url } from "./baseurl"
import { commonAPI } from "./commonAPI"

/* register API */
export const registerAPI = async(user)=>{
  return await commonAPI("POST",`${base_url}/users/register`,user,"")
}

/* login api */

export const loginAPI = async(user)=>{
  return await commonAPI("POST",`${base_url}/users/login`,user,"")
}

/* add booking */
export const addBookingAPI = async(reqBody,reqHeader)=>{
  return await commonAPI("POST",`${base_url}/booking/add`,reqBody,reqHeader)
}

/* get booking */
export const userBookingAPI = async(reqHeader)=>{
  return await commonAPI("GET",`${base_url}/user/booking`,"",reqHeader)
}

/* delete user */

export const deleteBookingAPI = async(userId, reqHeader)=>{
  return await commonAPI("DELETE",`${base_url}/user/remove/${userId}`,{},reqHeader)
}