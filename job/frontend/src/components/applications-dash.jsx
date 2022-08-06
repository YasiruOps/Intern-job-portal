import React from 'react'
import Applicationsmain from './applicationsmain-dash'
import Sidebar from './employer-sidebar'
import Header from './header'

export default function applications_dash() {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <Applicationsmain/>
    </div>
  )
}
