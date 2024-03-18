import { useState } from 'react'
import React from "react"
import './App.css'

import ImageSearch from './ImageSearch/ImageSearch'

const API_KEY='42927784-bb2cd81da21eaa5ba65e9bdd5'
// const url='https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo'
const url='https://pixabay.com/api/?key=42927784-bb2cd81da21eaa5ba65e9bdd5&q=yellow+flowers&image_type=photo'
class App extends React.Component{
  state ={
    images:[]
  }
handleGetRequest= async ()=>{
 const request=await fetch(url)
 const response=await request.json()
 this.setState({image:response.hits})
 console.log(response.hits )
 console.log(this.state.images )
}
componentDidMount=()=>{
  this.handleGetRequest()
}
render(){
  return(
    <div><ImageSearch handleGetRequest ={this.handleGetRequest}/> </div>
  )
  
  }
}


export default App
