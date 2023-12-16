import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskModal from "../modals/TaskModal"

function Task() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const columns = board.columns;
  const col = columns.find((board) => board.isActive === true);
  const task = col.tasks.find((task, i) => i === task.id);
  let completed = 0;
  let subtasks = task.subtasks;
  subtasks.forEach((subtask) => {
    if (subtask.isCompleted) completed++;
  });
  
  const handleOnDrag = (e) => {
    e.dataT
  }
  return (
    <div>Task</div>
  )
}

export default Task