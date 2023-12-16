import React from 'react'

function ElipsisMenu({ type, setOpenEditModal, setOpenDeleteModal}) {
  return (
<div className={
    type === "Boards"
      ? " absolute top-16 right-5"
      : "absolute top-6 ri"
}>ElipsisMenu</div>
  )
}

export default ElipsisMenu