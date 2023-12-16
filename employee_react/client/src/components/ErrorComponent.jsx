import { useState } from 'react';
import './error.css'

function ErrorComponent({onClose, message}){
  // const [success,setSuccess] =useState()
  console.log("Message...",message)
    return (
      <>
<div id="card" className="animated fadeIn">
  <div id="upper-sideerror">
    {/*?xml version="1.0" encoding="utf-8"?*/}
    {/* Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
    <svg
  version="1.1"
  id="exclamationInsideCircle"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  xmlSpace="preserve"
  width="100"
  height="100"
>
  <circle
    fill="#ffffff"
    cx="50"
    cy="50"
    r="40"
  />
  
  <text
    x="50%"
    y="70%"
    text-anchor="middle"
    alignment-baseline="middle"
    font-family="Arial, sans-serif"
    font-size="70"
    fill="#ff0000"
  >
    !
  </text>
</svg>


    <h3 id="status">Oops!</h3>
  </div>
  <div id="lower-sideerror">
    <p id="errormessage">
      {message}
    </p>
    <button id="contBtn" onClick={onClose}>
      Back
    </button>
  </div>
</div>
</>
    )
}
      {/* <button type='submit' onClick={()=>setSuccess(false)}></button>  */}

export default ErrorComponent;


