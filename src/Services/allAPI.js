
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