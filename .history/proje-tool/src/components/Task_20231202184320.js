import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskModal from "../modals/TaskModal"

function Task() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  return (
    <div>Task</div>
  )
}

export default Task