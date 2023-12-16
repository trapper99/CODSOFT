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
      
    ></div>
  )
}

export default DeleteModal