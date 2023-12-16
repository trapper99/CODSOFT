import React, { useState } from 'react'
import AddEditBoardModal from '../modals/AddEditBoardModal'

function EmptyBoard({ type }) {
    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  return (
    <div className='bg-white dark:bg-[#2b2c47] h-screen w-screen flex flex-col items-center justify-center'>
        <h3 className='text-gray-500 font-bold'>
            {type === "edit"
               ? "this board is empty. Create a new column to get started."
               : "th"}
        </h3>
    </div>
  )
}

export default EmptyBoard