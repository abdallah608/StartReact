import React, { Component } from 'react'
import IMAGES from '../../images/avataaars.svg'
import './Home.css'
export default class Home extends Component {
  render() {
    return (
    <>
    <div className=' home-bg vh-100 d-flex align-items-center justify-content-center flex-column'>
      <div className='text-center'>

      <img src={IMAGES}  alt="" className=' mt-5 w-75'/>
      </div>
      <h1 className='fw-bolder pt-3 text-white fs-1'>START REACT</h1>
      
      <div className='d-flex justify-content-center'>
      <div className='Home-line'></div>
      <i class="fa-solid fa-star fa-2x text-white p-3"></i>
      <div className='Home-line'></div>
      </div>

      <h3 className='text-white'>Graphic Artist - Web Designer - Illustrator</h3>

 


    </div>
    
    </>

    )
  }
}
