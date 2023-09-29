import { useState } from "react"
import React from 'react'

function Footer() {
    const [studentDetails,setStudentDetails] = useState({
        uname:"",
        email:"",
       
    })
    const btnStyle={padding:'10px',border:'1px',borderRadius:'5px',backgroundColor:'black',color:'white',width:'80px',margin:'10px'}
    const inputStyle = {margin:'10px',padding:'10px',borderRadius:'5px',width:'400px'} 
    const getDetails = (e) =>{
        const {name,value} = e.target
        setStudentDetails({...studentDetails,[name]:value})
       
    }
    console.log(studentDetails);


  return (
  
    <>
   
    <div style={{width:'100%',height:'50px',}}>
       
    <h2 style={{marginTop:"40px"}}>Join To Movie App</h2>
        <form style={{border:'1px solid',padding:'10px',borderRadius:'10px',marginTop:'20px'}}>
   <div style={{fontWeight:'bold'}}>
    <label htmlFor="uname">Name:
    <input  style={inputStyle} type="text" id='uname' placeholder='Username Please'
    name = 'uname'value={studentDetails.uname || ""}  onChange={(e)=>getDetails(e)} />
    </label>
    </div>
    <div style={{fontWeight:'bold'}}>
    <label htmlFor="email">Email:
    <input  style={inputStyle} type="email" id='email' placeholder='Email Please'
    name = 'email'value={studentDetails.email || ""}  onChange={(e)=>getDetails(e)} />
    </label>
    </div>
    <input  style={btnStyle} type="submit" value="Submit"/>
    </form>

    
    </div>
    </>
  )
}

export default Footer