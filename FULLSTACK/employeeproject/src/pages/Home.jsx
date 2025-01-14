import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export const Home = () => {
  const [Alldata,SetAlldata]=useState([])

  const getalldata=async()=>{
     const resp=await fetch(`${import.meta.env.VITE_BASE_URL}getallemployee`)
     const result=await resp.json()
     SetAlldata(result.data)
     console.log(result)
  }

  // delete employee
  const handleDelete=async (empid)=>{
    let check=confirm("are you sure?")
    if(check){
      let data={
        id:empid
      }
      const resp=await fetch(`${import.meta.env.VITE_BASE_URL}deleteemp`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
        }
        ,
        body:JSON.stringify(data)
      })
      const result=await resp.json()
      console.log(result)
      getalldata()
    }
   
  }
  useEffect(()=>{
    getalldata()
  },[])

  return (
    <div>Home
      

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Sno.
                </th>
                <th scope="col" className="px-6 py-3">
                  profile picture
                </th>
                <th scope="col" className="px-6 py-3">
                   Employee Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Designation
                </th>
                <th scope="col" className="px-6 py-3">
                    salary
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {
            Alldata?.map((emp,index)=>{
return(
  <tr key={emp._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
     {index+1}
  </th>
  <td className="px-6 py-4">
      <img src={emp.image} alt="dp" className='h-20 w-20 rounded-full' />
  </td>
  <td className="px-6 py-4">
      {emp.name}
  </td>
  <td className="px-6 py-4">
     {emp.email}
  </td>
  <td className="px-6 py-4">
     {emp.phone}
  </td>
  <td className="px-6 py-4">
     {emp.designation}
  </td>
  <td className="px-6 py-4">
     {emp.salary}
  </td>
  <td className="px-6 py-4">
      <Link to={`/update/${emp._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
      Edit</Link>
      <button onClick={()=>handleDelete(emp._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
      delete</button>
  </td>
</tr>

)
            })
          }
           
        </tbody>
    </table>
</div>


    </div>
  )
}
