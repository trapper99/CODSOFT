import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskModal from "../modals/TaskModal"

function Task() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const columns = board.columns;
  const col = columns.find((board) => board.isActive === true);
  
  return (
    <div>Task</div>
  )
}

export default Task