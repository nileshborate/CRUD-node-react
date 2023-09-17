import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './View.css'

const View = () => {
  const [formData,setFormData] = useState({
    id:"",
    name : "",
    email:"",
    mobile :""
})

const {id} = useParams()

  const getUserInfo = async() => {
    const response = await axios.get(`http://localhost:5000/user/${id}`)
    console.log("data  = ",response.data);
    setFormData(()=>{
      return{
        id:response.data[0].id,
        name : response.data[0].name,
        email : response.data[0].email,
        mobile : response.data[0].mobile,
      }
  })
  }

  useEffect(()=>{
    if(id){
      getUserInfo()
    }
  },[])

  return (
    <div style={{marginTop:"150px"}}>
    <div className='card'>
      <div className='card-header'>
        <p>User Contact Detail</p>
      </div>
      <div className='container'>
        <strong>ID:</strong>
        <strong>{formData.id}</strong>
        <br />
        <br />
        <strong>Name:</strong>
        <span>{formData.name}</span>
        <br />
        <br />
        <strong>Email:</strong>
        <span>{formData.email}</span>
        <br />
        <br />
        <strong>Mobile:</strong>
        <span>{formData.mobile}</span>
        <br />
        <br />
        <Link to="/">
          <button className='btn btn-edit' >Go Back</button>
        </Link>
      </div>
    </div>
  </div>

  )
}

export default View