import React, { useEffect, useState } from 'react'
import axios from "axios"
import './Home.css'

const Home = () => {

  const [data,setData] = useState([]);

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
                <th scope="row">{index+1}</th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.mobile}</th>
              </tr>
            );
          })} 
      </tbody>
    </table>
  </div>

  )
}

export default Home