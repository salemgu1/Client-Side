import React from 'react'
import './Transfusion.css'
export default function Transfusion({transfusion}){


  return (
  <>
  
  <div class="transfusion">
    
    <p> name : {transfusion.name}</p>
    <p>id : {transfusion.idNumber}</p>
    <p>blood type : {transfusion.bloodType}</p>
  </div>
  </>
  )
}
