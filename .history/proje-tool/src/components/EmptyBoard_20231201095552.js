import React, { useState } from 'react'
import AddEditBoardModal from '../modals/AddEditBoardModal'

function EmptyBoard({ type }) {
    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  return (
    <div className=''>EmptyBoard</div>
  )
}

export default EmptyBoard