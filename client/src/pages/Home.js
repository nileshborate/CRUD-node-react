import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import './Home.css'
import { toast } from 'react-toastify'

const Home = () => {

  const [data,setData] = useState([]);
  const navigate = useNavigate()

  const getUsers = async() => {
    const response = await axios.get("http://localhost:5000/users")
    console.log("Response = ",response);
    if(response.status === 200){
      setData(response.data)
    }
  }

  useEffect(()=>{
    getUsers();
  },[])

  const deleteUser = async(id) => {
    const response = await axios.delete(`http://localhost:5000/user/${id}`)
    toast.success(response.data)
    window.location.reload();
  }

  return (
    <div style={{marginTop : "150px"}}>
    <table className="styled-table">
      <thead>
        <tr>
          <th style={{textAlign: "center"}}>SrNo</th>
          <th style={{textAlign: "center"}}>Name</th>
          <th style={{textAlign: "center"}}>Email</th>
          <th style={{textAlign: "center"}}>Contact</th>
          <th style={{textAlign: "center"}}>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data && data.map((item,index) => {
            return (
              <tr key={index}>
                <td scope="row">{index+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>
                  <Link to={`/update/${item.id}`} className="btn btn-edit">
                      Edit
                  </Link>
                  <button className='btn btn-delete' onClick={() => deleteUser(item.id)}>Delete</button>
                  <Link to={`/view/${item.id}`} className="btn btn-view">
                      View
                  </Link>
                </td>
              </tr>
            );
          })} 
      </tbody>
    </table>
  </div>

  )
}

export default Home