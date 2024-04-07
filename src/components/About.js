
import React from 'react'

export default function About(props) {
    
  return (
    <div className='container' style={{color:props.mode==='light'?'black':'white', backgroundColor:props.mode==='light'?'white':'#07224a'}}>
        <div>
            <strong>Text Utils is used to uppercase,lowercase etc</strong> 
        </div>
        </div>
  )
}
