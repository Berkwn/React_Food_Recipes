import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function SiteNav() {
  
  const navigate=useNavigate()

  return (
    <>
    
    <nav style={{height:"70px",backgroundColor:"#A8E6BC"}}>
      <div style={{height:"70px"}} className='nav-link d-flex w-100'>
        <a  onClick={()=>navigate('/Recipes')} href="#" className='nav-link ms-5 w-100 mt-3' style={{color:"red",alignItems:"center",fontSize:"30px",fontWeight:"500",alignItems:"center"}}>ANASAYFA</a>
        <a onClick={()=>{navigate('/')}}  className="nav-link w-100 me-5 mt-3" style={{color:"black",alignItems:"center",fontSize:"30px",fontWeight:"500",textAlign:"end"}}  href="#">LOGOUT</a>
      </div>

    </nav>
    
    </>
  )
}
