import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import './Transfusion.css'


export default function ViewData() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:4000/view')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, [data]);

    async function downloadPdf() {
        await axios.get(`http://localhost:4000/download`);
      }

    return (
        <>
        <Button onClick={downloadPdf} variant="contained">Download</Button>
        {data && data.map((item)=>{
              return (<div class="transfusion">
              <p> Action Type : {item.actionType}</p>
              <p>Description : {item.description}</p>
            </div> 
              ) 
                })}
        </>
      )
}
