import React, { useState } from 'react'
import AddEditBoardModal from '../modals/AddEditBoardModal'

function EmptyBoard({ type }) {
    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  return (
    <div className='bg-white dark:bg-[#2b2c47] h-screen w-screen flex flex-col items-center justify-center'>
        <h3 cl></h3>
    </div>
  )
}

export default EmptyBoard