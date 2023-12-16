import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Center from './components/Center'

function App() {
  return (
    <div className=''>

      {/* Header Section*/}

       <Header/>

       {/* Center Section */}

       <Center/>
       
    </div>
  )
}

export default App