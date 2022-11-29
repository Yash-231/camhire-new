import React from 'react';
import './css/AboutUs.css';
import vector from "../images/vector.png";
import profile from "../images/ellipse.png";

const AboutUs = () => {

  return (
    <div id='about-us-page'>
      <h1>About Us</h1>
      <p>Three years back, five mavericks saw a dream to take a journey off-beat from what they were doing and jumped into a pool of creating stories by capturing moments. One day while sitting in the backyard, one of the stakeholders, also a passionate photographer, pondered the endless hurdles in the business world of photography. Whether it was about finding the best photographers from different corners of the country or picking the apt one according to your style. CamHire is an endeavour to overcome all those barriers and fulfil that very motive of photography. We help photographers and freelancers connect with clients all over Indiato provide desired services. CamHire started off as an expression of Suraj’s hunger for creativity to build photographic content by using different lenses. Adding to his passion for the trueessence of photography, Kuldeep and Yash brought their technical and financial minds,respectively. The marketing brain behind the lenses came forward with the emerging entrepreneur, Simar, who lent all his wisdom to turn a vision into a brand. CamHire became a perfect amalgamation of all the business skills and creative interests.Inspired to look at the world through camera lenses, a venture was born that aims to capture the beauty of human emotions in their truest form.</p>
      <h1>Why Choose Us?</h1>
      <div className='why-choose-us-content' style={{ backgroundImage: `url(${vector})` }}>
        <div className='first-row' >
          <span>We help photographers connect with clients.</span>
          <span>We minimize fraud done by both parties.</span>
          <span>We help scale the photography industry.</span>
        </div>
      </div>
      <div>
        <span>We are an intermediate third-party guarantee between photographer and their client.</span>
        <span>We provide 100% satisfactory deals between both parties.</span>
      </div>
      <h1>Who Are We?</h1>
      <div className='content-container'>
        <div className='first-row'>
          <div className='column'>
            <img src={profile} alt='Kuldeep Chotrani' />
            <h2>Kuldeep Chotrani</h2>
            <p>Details over here</p>
          </div>
          <div className='column'>
            <img src={profile} alt='Kuldeep Chotrani' />
            <h2>Kuldeep Chotrani</h2>
            <p>Details over here</p>
          </div>
          <div className='column'>
            <img src={profile} alt='Kuldeep Chotrani' />
            <h2>Kuldeep Chotrani</h2>
            <p>Details over here</p>
          </div>
        </div>
        <div className='last-row'>
          <div className='column'>
            <img src={profile} alt='Kuldeep Chotrani' />
            <h2>Kuldeep Chotrani</h2>
            <p>Details over here</p>
          </div>
          <div className='column'>
            <img src={profile} alt='Kuldeep Chotrani' />
            <h2>Kuldeep Chotrani</h2>
            <p>Details over here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs