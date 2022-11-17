import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <>


<div className='bg-white py-5 mt-5'>


<div className=' text-center pt-5'>
<h2 className='contact-tittle fw-bold'>CONTACT ME</h2>
<div className='d-flex justify-content-center'>
  <div className='Contact-line'></div>
<i class=" icon-tittle fa-solid fa-star fa-2x  p-3"></i>
  <div className='Contact-line'></div>
</div>

</div>
<div className='container'>
  <div className='row'>
<div className='col-md-8 m-auto p-4'>
<input className="form-control border-0 border-bottom  fs-4  " id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false" />
</div>
<div className='col-md-8 m-auto p-4'>
  
<input className="form-control  border-0 border-bottom fs-4" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." aria-invalid="false" />

</div>
<div className='col-md-8 m-auto p-4'>

<input className="form-control  border-0 border-bottom fs-4" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." aria-invalid="false" />

</div>
<div className='col-md-8 m-auto p-4'>


<textarea className="form-control  border-0 border-bottom fs-4" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." aria-invalid="false" defaultValue={""} />

<button className="Contact-btn btn btn-success border-0  btn-xl my-3 py-3 px-5" id="sendMessageButton" type="submit">Send</button>
</div>



  </div>
</div>

</div>
    
<div className=' Contact-bg mt-5 '>

<div className='container pt-5 pb-5'>
  <div className="row">
    
      <div className="col-md-4 text-center">
      <h3 className='text-white pb-3'>LOCATION</h3>
      <p className='text-white w-50 m-auto fw-bold'>2215 John Daniel Drive Clark, MO 65243</p>
      </div>
      <div className="col-md-4 text-center">
      <h3 className='text-white pb-3'>AROUND THE WEB </h3>
      <div className='d-flex justify-content-center  '>
        <div className=" Contact-icons border rounded-circle   text-white me-2 ">
        <i className="fa-brands fa-facebook-f p-3 fw-bolder"></i>
        </div>
        <div className="Contact-icons border rounded-circle text-white me-2 ">
        <i className="fa-brands fa-twitter p-3 fw-bolder "></i>
        </div>
        <div className="Contact-icons border rounded-circle text-white me-2">
        <i className="fa-brands fa-linkedin-in fw-bolder p-3 "></i>
        </div>
        <div className="Contact-icons border rounded-circle text-white me-2">
        <i className="fa-brands fa-dribbble fa-1x p-3  "></i>
        </div>
      </div>
      </div>
      <div className="col-md-4 text-center">
      <h3 className='text-white pb-3'>ABOUT FREELANCER</h3>
      <p className='text-white w-75 m-auto fw-bold'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>


      </div>
    
  </div>
</div>
    </div>

      </>
    )
  }
}
