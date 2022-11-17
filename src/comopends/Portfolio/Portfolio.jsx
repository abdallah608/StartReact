import React from 'react'
import IMAGES from '../../images/index.jsx'
import ModalLayer from '../ModalLayer/ModalLayer'
import './Portfolio.css'


export default function Portfolio() {
return (
<>
    <div className='bg-white py-5 mt-5'>

      <div className='text-center pt-4 pb-4'>

      <h2 className='tittle-bg fw-bolder text-center'>PORTFOLIO</h2>
      <div className='d-flex justify-content-center'>

      <div className='line pb-1 '></div>

      <i class="portfolio-icon fa-solid fa-star fa-2x  p-3"></i>
      
      <div className='line pb-1'></div>
      </div>
    
      </div>
      <div className='container'>
        <div className='row gy-3'>


      {IMAGES.map(({Img,index})=><div className='col-md-4 position-relative '>
        <div className='position-relative'>

      <img src={Img} key={index} alt="" className='img-fluid rounded-3' />
      <div className=' imgs-layer text-white bg-success rounded-3 top-0 end-0 start-0 bottom-0  rounded bg-opacity-75 opacity-0  position-absolute d-flex align-items-center justify-content-center'>
      <ModalLayer/>
      </div>
        </div>
      </div>
)}



        </div>
      </div>
      
    </div>
      
      
      </>
  )
}
