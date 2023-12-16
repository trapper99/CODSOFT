import React from 'react'

function ElipsisMenu({ type, setOpenEditModal, setOpenDeleteModal}) {
  return (
<div className={
    type === "Boards"
      ? " absolute top-16 right-5"
      : "absolute top-6 right-4"
}
>
    <div className='flex j'></div>
</div>
  )
}

export default ElipsisMenu