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
      className='fixed right-0 top-0 px-2 overflow-scroll scrollbar-hide z-50 left-0 bottom-0 justify-center items-center flex dropdown'
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "Space") {
          setIsDeleteModalOpen(false);
        }
      }}
    ></div>
  )
}

export default DeleteModal