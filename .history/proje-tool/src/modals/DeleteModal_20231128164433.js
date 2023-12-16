import React from 'react'

function DeleteModal({ type, title, onDeleteBtnClick, setIsDeleteModalOpen}) {
  const handleModalClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setIsDeleteModalOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Space") {
      setIsDeleteModalOpen(false);
    }
  };

  const handleDeleteBtnClick = () => {
    onDeleteBtnClick();
  };

  const handleCancelBtnClick = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div
      onClick={handleModalClick}
      className='fixed right-0 top-0 px-2 overflow-scroll scrollbar-hide z-50 left-0 bottom-0 justify-center items-center flex dropdown'
      onKeyDown={handleKeyDown}
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

        <div className='flex w-full mt-4 items-center text-white hover:opacity-75 bg-red-500 py-2 rounded-full'>
          <button
            onClick={handleDeleteBtnClick}
            className='w-full'
            onKeyDown={handleKeyDown}
          >
            Delete
          </button>

          <button
            onClick={handleCancelBtnClick}
            className='w-full'
            onKeyDown={handleKeyDown}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  DeleteModal.propTypes = {
    onDeleteBtnClick:
  };
}

export default DeleteModal