import React from 'react'
import Jobpostingmain from './jobpostingmain-dash'
import Sidebar from './employer-sidebar'
import Header from './header'


export default function jobposting() {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <Jobpostingmain/>
    </div>
  )
}
