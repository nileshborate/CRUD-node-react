import React, { useEffect, useState } from 'react'
import './AddEdit.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const AddEdit = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [formData,setFormData] = useState({
    name : "",
    email:"",
    mobile :""
})
const handleInputChange = (e) => {
  const name = e.target.name
  const value = e.target.value
  setFormData((prevData)=>{
      return{
          ...prevData,
          [name] : value
      }
  })
}

const getUserInfo = async() => {
  const response = await axios.get(`http://localhost:5000/user/${id}`)
  console.log("data  = ",response.data);
  setFormData(()=>{
    return{
      name : response.data[0].name,
      email : response.data[0].email,
      mobile : response.data[0].mobile,
    }
})
}

useEffect(()=>{
  if(id){
    getUserInfo();
  }
},[])


const addContact = async(data) => {
  const response = await axios.post("http://localhost:5000/user",data)
  console.log("Response = ",response);
  if(response.status === 200){
    toast.success(response.data)
  }
}

const updateContact = async(data,id) => {
  const response = await axios.put(`http://localhost:5000/user/${id}`,data)
  console.log("Response = ",response);
  if(response.status === 200){
    toast.success(response.data)
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("formdata = ",formData);
  if(!formData.name || !formData.email || !formData.mobile){
    toast.error("Please fill all details")
  }else{
    if(!id){
      addContact(formData)
    }else{
      updateContact(formData,id)
    }
    
    navigate("/")
  }

}
  return (
    <div style={{marginTop:"100px"}}>
      <form  style={{margin:"auto",
          padding:"15px",
          maxWidth:"400px",
          alignContent:"center"}}
          onSubmit={handleSubmit}
      >
      <label htmlFor='name'>Name</label>
          <input type="text"
          id="name"
          name="name"
          placeholder='Enter Name...'
          onChange={handleInputChange}
          value={formData.name}
      />
      <label htmlFor='email'>Email</label>
        <input type="email"
          id="email"
          name="email"
          placeholder='Enter Email...'
          onChange={handleInputChange}
          value={formData.email}
        />
        <label htmlFor='name'>Mobile</label>
        <input type="number"
          id="mobile"
          name="mobile"
          placeholder='Enter Mobile...'
          onChange={handleInputChange}
          value={formData.mobile}
        />
        <input type="submit" value={id ? "Update" : "Add"} />

      </form>
    </div>
  )
}

export default AddEdit