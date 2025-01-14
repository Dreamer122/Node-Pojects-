import  { useState ,useEffect} from 'react'
import { Form } from '../Components/Form'
import { useParams } from 'react-router-dom'
const Updateemp = () => {
    const [empdata,setEmpdata]=useState({})
    const {id}=useParams()

// getdata
const getdata=async()=>{
    const resp=await fetch(`${import.meta.env.VITE_BASE_URL}getemployee/${id}`)
    const result=await resp.json()
  setEmpdata(result.data)
    console.log(result)
 }

 const handleSubmit=async(updateddata)=>{
    
    updateddata.id=id
   const res=await fetch(`${import.meta.env.VITE_BASE_URL}updateemp`,{
        method:"PUT",
        body:JSON.stringify(updateddata),
        
        headers:{
            'Content-Type':'application/json',
        },
       
    })
    let d=await res.json()
    console.log(d)
}


    useEffect(()=>{
getdata()
    },[])
  return (
    <div>
        {/* edit employee */}
        <h2>Update data{"babita"}</h2>
<Form empdata={empdata} handleSubmit={handleSubmit}/>

    </div>
  )
}

export default Updateemp