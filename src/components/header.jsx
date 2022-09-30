import React from 'react'
import { createRoutesFromChildren } from 'react-router-dom'
import camHireImage from '../components/img/CAMHIRE.png'
function header() {
  return (
      <div>header
          <img src={camHireImage} style={{ width: "300px", height:"200px" }} alt="" />
          </div>
  )
}

export default header