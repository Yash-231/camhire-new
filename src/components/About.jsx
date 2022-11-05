import React from 'react'
import vector from "../images/vector.png";
import Ellipse from "../images/Ellipse12.png";
import "./About.css";

const About = () => {
  return (
      <div className='container_about'>
 <div className='heading'>   <h1>About Us</h1></div>
    <div className='para'><p>Three years back, five mavericks saw a dream to take a journey off-beat from what they were doing and jumped into a pool of creating stories by capturing moments. One day while sitting in the backyard, one of the stakeholders, also a passionate photographer, pondered the endless hurdles in the business world of photography. Whether it was about finding the best photographers from different corners of the country or picking the apt one according to your style. CamHire is an endeavour to overcome all those barriers and fulfil that very motive of photography. We help photographers and freelancers connect with clients all over Indiato provide desired services. CamHire started off as an expression of Suraj’s hunger for creativity to build photographic content by using different lenses. Adding to his passion for the trueessence of photography, Kuldeep and Yash brought their technical and financial minds,respectively. The marketing brain behind the lenses came forward with the emerging entrepreneur, Simar, who lent all his wisdom to turn a vision into a brand. CamHire became a perfect amalgamation of all the business skills and creative interests.Inspired to look at the world through camera lenses, a venture was born that aims to capture the beauty of human emotions in their truest form.</p></div>
      <div className='second_heading' ><h1>Why Choose us?</h1></div>
    
      <section>
 
        <div className='information'>
          <div className='second_para' >
        
      <div className='vector_img'>
      <img
              src={vector}
              // style={{ width: "900px", height: "450px" }}
              alt="/"
        />
              </div>
         
            </div>
        
        <div className='para1'><p>We help photographers connect<br></br>with clients.</p>
          <p>We minimize fraud done by both <br></br> parties.</p>
          <p>We help scale the <br></br> photography industry</p>
        </div>
        <div className='Third_para'>
        <div className='para2'><p className='p4'>We are an intermediate third- <br></br>party guarantee between <br></br> photographer and their client.</p>
      <p className='p5'>We provide 100% satisfactory <br></br> deals between both parties.</p>
      </div>
      </div>
    </div>
      </section>
      <div className='Third_heading'>
        <h1>Who are we ?</h1>
      </div>
      <div>
        <div className='fisrt-img-box'>
          <div className='mb-4'>
          <img className='img1'
              src={Ellipse}
              style={{  width: "120px", height: "120px"  }}
              alt="/"
          />
        </div>
         <div> <h4 style={{color:"rgba(255, 255, 255, 1)", fontWeight:"700", lineHeight:"40px", fontSize:"20px", position:'relative', left:"-30px" }}> Kuldeep Chotrani</h4></div>
          <div className='box1'></div>
    </div>
        <div className='second-img-box'>
       <div className='mb-4'>   <img className='img2'
              src={Ellipse}
              style={{  width: "120px", height: "120px"  }}
              alt="/"
          />
          </div>
           <div className='mb-2'>  <h4 style={{color:"rgba(255, 255, 255, 1)", fontWeight:"700",fontSize:"20px", lineHeight:"40px"}}>Daksh Jain</h4></div>
          <div className='box2'></div>
          </div>
          <div className='third-img-box'>
          <div className='mb-4'>   <img className='img2'
              src={Ellipse}
              style={{  width: "120px", height: "120px"  }}
              alt="/"
          />
          </div>
           <div >  <h4 style={{color:"rgba(255, 255, 255, 1)", fontWeight:"700", fontSize:"20px",lineHeight:"40px", position:"relative"}}>Prnav patil</h4></div>
                <div className='box3'></div>
       </div>
      </div>
     
      <div >
        <div className='fourth-img-box'>
        <div className='mb-4'>
          <img className='img1'
              src={Ellipse}
              style={{  width: "120px", height: "120px"  }}
              alt="/"
          />
        </div>
        <div >  <h4 style={{color:"rgba(255, 255, 255, 1)", fontWeight:"700",fontSize:"20px", lineHeight:"40px"}}>Yash Jain</h4></div>
         <div className='box4'></div>
</div>
        <div className='five-img-box'>
        <div className='mb-4'>
          <img className='img1'
              src={Ellipse}
              style={{  width: "120px", height: "120px"  }}
              alt="/"
          />
        </div>
        <div >  <h4 style={{color:"rgba(255, 255, 255, 1)", fontWeight:"700",fontSize:"20px", lineHeight:"40px"}}>Daksh Jain</h4></div>
           <div className='box5'></div>
       </div>
      
      </div>
    
   
     </div>
   
  
  )
}

export default About;
