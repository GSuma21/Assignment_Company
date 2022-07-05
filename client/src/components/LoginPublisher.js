import React, { useState } from 'react'
import './Login.css'


const LoginPublisher = () => {
  const [fname,SetFname] = useState('')
  const [lname,SetLname] = useState('')
  const [orgname,SetOrgname] = useState('')
  const [email,SetEmail] = useState('')
  const [password,SetPassword] = useState('')


 async function registerUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:8000/api/register',{
        method:'POST',
        headers:{
            'Content-type':'application/json'

        },
        body: JSON.stringify({
            fname,
            lname,
            orgname,
            email,
            password
        })
    })

    const data = await response.json()
    console.log(data)
  }
  return (
    <div >
        <p>Login Publisher</p>
        <form className='first'>
        <input value={fname} onChange={(e) => SetFname(e.target.value)} type="text" placeholder='First Name' />   <br />
        <input value={lname} onChange={(e) => SetLname(e.target.value)}type="text" placeholder='Last Name' /><br />
        <input value={orgname} onChange={(e) => SetOrgname(e.target.value)} type="text" placeholder='Organization Name' /><br />
        <input value={email} onChange={(e) => SetEmail(e.target.value)}type="email" placeholder='Email' /><br />
        <input value={password} onChange={(e) => SetPassword(e.target.value)} type="text" placeholder='Password' /><br /><br />
     
        <input type="submit" onClick={registerUser} value='Register' /><br />
        </form>

    </div>
  )
}

export default LoginPublisher