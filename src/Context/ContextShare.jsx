import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

//create context api we use createContext()

export const addUserContext = createContext()

function ContextShare({children}) {

    /* 1) create state to store data to be shared */
    // 2) children is a predifined prop used to share data between all components
    const [addUserResponse , setUserResponse] = useState({})

  return (
    <>
        <addUserContext.Provider value={{addUserResponse,setUserResponse}}>        
        {children}        
        </addUserContext.Provider>
    </>
  )
}

export default ContextShare

/* 
return (
    <>
         
        <addUserContext.Provider value={{addUserResponse,setUserResponse}}> more than one content thats why it is object
        children is given inside selector of the context which is addusercontext
        provider is given to get global access

        {children}
        
        </addUserContext.Provider>
    </>
  )
  then wrap the app component in tontextshare
*/