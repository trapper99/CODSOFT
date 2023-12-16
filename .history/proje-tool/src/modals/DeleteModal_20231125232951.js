import React from 'react'

function DeleteModal({ type, title, onDeleteBtnClick, setIsDeleteModalOpen}) {
  return (
    <div
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return
        }
        setIsDeleteModalOpen(false);
      }}
      className='fixed right-0 top-0'
    ></div>
  )
}

export default DeleteModal