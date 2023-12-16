import React, { useState } from 'react'
import { useDispatch, use } from 'react-redux'
import Header from './components/Header'
import Center from './components/Center'

function App() {
  return (
    <div>

      {/* Header Section*/}

       <Header/>

       {/* Center Section */}

       <Center/>
       
    </div>
  )
}

export default App