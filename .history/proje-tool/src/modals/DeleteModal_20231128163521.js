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
    >
      {/* Delete Modal */}
      <div className='scrollbar-hide overflow-y-scroll max-h-[95vh] my-auto bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md px-8 py-8 rounded-lg'>
        <h3 className='font-bold text-red-500 text-xl'>
          Delete this {type} {title}
        </h3>
        {type === "task" ? (
          <p>
            Are you sure you want to delete this task? This action cannot be
            undone.
          </p>
        ) : (
          <p>
            Are you sure you want to delete this board? This action cannot be
            undone.
          </p>
        )}

        <div className='flex w-full mt'></div>
      </div>
    </div>
  )
}

export default DeleteModal