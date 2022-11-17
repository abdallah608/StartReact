import React, { Component } from 'react'
import './About.css'
export default class About extends Component {
  render() {
    return (
      <>
      <div className=' About-bg pt-5 pb-5 mt-5'>
  
         <div className='text-center pt-5'>

        <h2 className=' fw-bolder text-center text-white'>ABOUT</h2>

      <div className='d-flex justify-content-center'>
      <div className='About-line'></div>
        <i class="fa-solid fa-star fa-2x text-white p-3 pb-4"></i>
      <div className='About-line'></div>
      </div>

        </div>  
        <div className='container'>
          <div className='row'>
  
        <div className='col-md-4 ms-auto'>

        <p className='text-white lead fw-normal'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className='col-md-4 me-auto'>
      <p className='text-white lead fw-normal'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        
        </div>
  
          </div>
        </div>
        
      </div>
        
        
        </>
    )
  }
}
