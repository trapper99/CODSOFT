import React, { useState } from 'react'
import AddEditBoardModal from '../modals/AddEditBoardModal'

function EmptyBoard({ type }) {
    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  return (
    <div className='bg-white dark:bg-[#2b2c47] h-screen w-screen flex flex-col items-center just'>EmptyBoard</div>
  )
}

export default EmptyBoard