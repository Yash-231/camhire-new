import React from 'react';
import { MdPhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import { TfiTwitterAlt } from "react-icons/tfi";
import { TfiFacebook } from "react-icons/tfi";
import { AiFillYoutube } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";


import "./Contact.css";
const Contact = () => {
    return (
      
           <div className='container' >
    
<div className='contact-info'>
       <p>Contact Us</p>
                         <div className='address'>
                                <h6 className='mail'>letsvendout@gmail.com"</h6>
                                <h6 className='phone'>+91-6378530832</h6>
                                <h6>5th Floor, D Building MIT College, <br></br> Kothrud Paud Road,
                                   Pune <br></br>Maharashtra(411038)</h6>
       
                         </div>    
   <div className='icons'>
                                <div className='icon1'>
              <MdMailOutline />
     
       </div>
 <div className='icon2'>
 <MdPhone />
       </div>
      
 <div className='icon3'>
 <TbLocation />
     </div>
                         </div>
                         
   </div>
        <div className='form-container'>
        <div className="contact-form">
               <div class="mb-3">

<input type="text" className="form "   id="input1" placeholder="Name"/>
</div>
     <div class="mb-3" >

<input type="email" className="form" id="input1"  placeholder="E-mail"/>
</div>
<div class="mb-3">
<textarea className="form" id="exampleFormControlTextarea1" rows="4" placeholder="Type your message here"></textarea>
</div>
<div className="button" role="group" aria-label="Basic radio toggle button group">
<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
<label  className="button-label" for="btnradio1">Send Us</label>
       </div>
           



   </div>
   
  </div>
  
                  <div className="social-icon">
                            
                         <TfiFacebook style={{width:"40px", height:"40px", borderRadius:"50%",border:"1px solid ",backgroundColor:"rgba(0, 0, 0, 1)", padding:"5px", margin:"5px", color: "rgba(55, 55, 55, 1)" }}/>   
                         {/* <TfiTwitterAlt  style={{width:"40px", height:"40px", borderRadius:"50%",border:"1px solid ",backgroundColor:"rgba(0, 0, 0, 1)",padding:"5px",margin:"5px",color:"#0a66c2"}} />    */}
                         <AiFillYoutube style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid ", backgroundColor: "rgba(0, 0, 0, 1)", padding: "5px", margin: "5px", color: "rgba(55, 55, 55, 1)" }} /> 
                         <FaInstagramSquare style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid ", backgroundColor: "rgba(0, 0, 0, 1)", padding: "5px", margin: "5px", color: "rgba(55, 55, 55, 1)" }} />
                         <FaLinkedin style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid ", backgroundColor: "rgba(0, 0, 0, 1)", padding: "5px", margin: "5px", color: "rgba(55, 55, 55, 1)" }} />
                  </div>
 
</div>
    
      
   
  )
}

export default Contact ;
