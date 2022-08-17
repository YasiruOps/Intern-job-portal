import React from 'react'
import Video1 from "../Videos/zombie.mp4"
import Header from "./header"
import "../CSS/fullathal.css"

export default function fullathal() {
  return (
    <div className='row'>
        <Header/>
        <video className='col-12'  src={Video1} autoPlay loop />
        <p className="ammo" style={{
            
    }}> Kottuwak Kamuthe</p>
        </div>
  )
}
