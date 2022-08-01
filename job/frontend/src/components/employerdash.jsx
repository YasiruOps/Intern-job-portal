import React from 'react'
import Header from './header'
import Sidebar from './employer-sidebar'
import Empmain from './employer-main'

export default function employerdash() {
  return (
    <div>
       <Header/>
       <Sidebar/>
       <Empmain/>
    </div>
  )
}
