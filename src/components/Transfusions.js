import React from 'react'
import Transfusion from './Transfusion'

export default function Transfusions({transfusions}) {

    if(transfusions!=undefined){
            return (
        <>
        
        {transfusions.map((transfusion)=>{
            return <Transfusion transfusion={transfusion} />
        })}
        </>
      )
    }

}
