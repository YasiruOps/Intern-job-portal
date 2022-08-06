import React from 'react'
import Sidebar from './employer-sidebar'
import IQuestionMain from './internquestionsmain-dash'
import Header from './header'

export default function internquestions() {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <IQuestionMain/>
    </div>
  )
}
