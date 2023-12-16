import React from 'react'

function ElipsisMenu({ type, setOpenEditModal, setOpenDeleteModal}) {
  return (
<div className={
    type === "Boards"
      ? " absolute top-16 right-5"
      : "absolute top-6 right-4"
}
>
    <div className='flex justify-end items-center'>
        <div className='w-40 text-sm z-50 font-medium shadow-md shadow-['></div>
    </div>
</div>
  )
}

export default ElipsisMenu