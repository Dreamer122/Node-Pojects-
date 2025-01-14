import React from 'react'
import { Form } from '../Components/Form'
const Addemp = () => {

    const handleSubmit=async(data)=>{
       const res=await fetch(`${import.meta.env.VITE_BASE_URL}createemployee`,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json',
            },
           
        })
        let d=await res.json()
        console.log(d)
    }
  return (
   <div>
    <Form handleSubmit={handleSubmit}/>
   </div>
  )
}

export default Addemp