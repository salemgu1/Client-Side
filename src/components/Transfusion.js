import React from 'react'
import './Transfusion.css'
import axios from 'axios'

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
