import React, { useState } from 'react'
import AddEditBoardModal from '../modals/AddEditBoardModal'

function EmptyBoard({ type }) {
    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  return (
    <div className='bg-white dark:bg-[#2b2c47] h-screen w-screen flex flex-col items-center justify-center'>
        <h3 className='text-gray-500 font-bold'>
            {type === "edit"
               ? "this board is empty. Create a new column to get started."
               : "there are no boards. Create a new board to get started."}
        </h3>
        <button
          onClick={() => {
            setIsBoardModalOpen(true);
          }}
          className='w-full items-center max-w-xs font-bold hover:opacity-70 dark:text-white dark:bg-[#635fc7] mt-8 relative text-white bg-[#635fc7] p'></button>
    </div>
  )
}

export default EmptyBoard