/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const Form = ({empdata,handleSubmit}) => {
    const navigate=useNavigate()
    const [data,setData]=useState({
        name:"",
        email: '',
        phone:'',
       designation:"",
       salary: ""

    })
    const handleinput=(e)=>{
        setData((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
        console.log(data)

    }

//    dubmit function
const submitForm=(e)=>{
    e.preventDefault()
    handleSubmit(data)
    // setData({})
    navigate("/")

}

useEffect(()=>{
    if(empdata){
        setData(empdata)
    }
    else{
        setData({name:"",email:"",phone:"",designation:"",salary:""})
    }
},[empdata])
  return (
    <div>
<form action="
" onSubmit={submitForm}>
<input type="text" name='name' value={data?.name} placeholder='enter employeename' onChange={handleinput} className='border bg-slate-100 mb-2 h-10 w-56 text-blue-600'/> <br />
<input type="email" name='email' value={data?.email} placeholder='enter email' onChange={handleinput} className='border bg-slate-100 mb-2 h-10 w-56 text-blue-600'/> <br />
{/* phone */}
<input type="text" name='phone'value={data?.phone} placeholder='enter phone number' onChange={handleinput} className='border bg-slate-100 mb-2 h-10 w-56 text-blue-600'/> <br />
{/* salary */}
<input type="number" name='salary' value={data?.salary} placeholder='enter salary' onChange={handleinput} className='border bg-slate-100 mb-2 h-10 w-56 text-blue-600'/> <br />
{/* designation */}
<input type="text" name='designation' value={data?.designation} placeholder='enter designation' onChange={handleinput} className='border bg-slate-100 mb-2 h-10 w-56 text-blue-600'/> <br />
{/* button */}
<button type="submit" className='py-3 px-9 bg-blue-800 text-white rounded-sm '>Submit</button>

</form>

    </div>
  )
}
