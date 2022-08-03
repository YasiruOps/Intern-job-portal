import React from 'react'
import Header from './header'
import Sidebar from './employer-sidebar'
import Empmain from './employer-main'
import "../CSS/employerdash.css"

export default function employerdash() {
  return (
    <div className='maincomponentdash'>
       <Header/>
       <Sidebar/>
       <Empmain/>
      
    </div>
  )
}
