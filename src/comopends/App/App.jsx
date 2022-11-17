import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Errorpage from '../Errorpage/Errorpage'
import Home from '../Home/Home'
import Master from '../Master/Master'
import Navbar from '../Navbar/Navbar'
import Portfolio from '../Portfolio/Portfolio'

export default class App extends Component {
 routes = createBrowserRouter([
  {path:'/' , element:<Master/> , errorElement: <Errorpage/> , children:[
    {index:true , element:<Home/>},
    {path:'Portfolio' , element:<Portfolio/>},
    {path:'about' , element:<About/>},
    {path:'contact' , element:<Contact/>}
  ]}
 ])
 
  render() {
    return (
      <>
    <RouterProvider router={this.routes}/>
      </>
    )
  }
}
