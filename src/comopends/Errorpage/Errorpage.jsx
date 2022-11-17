import React, { Component } from 'react'
import images from '../../images/error.jpg'
export default class Errorpage extends Component {
  render() {
    return (
      <>
      <div className='text-center'>
        <img className='w-50' src={images} alt="" />
      </div>  
      </>
    )
  }
}
