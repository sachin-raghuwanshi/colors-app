import React from 'react'
import { useNavigate } from 'react-router'
const Logout = ({setisloggedin}) => {
    const navigate=useNavigate()
    const data={
        'name':'successfully logged out '
    }
    return (
        <button className="btn btn-primary" onClick={()=>{setisloggedin(false); navigate("/",{state:data} )}}>Are you sure you want to log out</button>

    )
}

export default Logout
