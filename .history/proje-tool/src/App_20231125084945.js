import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Center from './components/Center'

function App() {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const dispatch = 
  return (
    <div className='overflow-hidden overflow-x-scroll'>

      {/* Header Section*/}

       <Header/>

       {/* Center Section */}

       <Center/>
       
    </div>
  )
}

export default App