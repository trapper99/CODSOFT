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
    e.dataTransfer.setData(
      "text",
      JSON.stringify({
        taskIndex: task.id,
        colIndex: col.id,
      })
    );
  };
 
  return (
    <div>
      <div
       onClick={() => {
         setIsTaskModalOpen(true);
       }}
       draggable
       onDragStart={handleOnDrag}
       className='w-[280px] first:my-5 rounded-lg bg-white dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg hover:text-[#635fc7] dark:text-white dark:hover:text-[#635fc7] cursor-pointer'>
        <p className='font-bold tracking-wide'>{task.title}</p>
        <p className='text-[#828FA3] fo'>{completed} of {subtasks.length} subtasks</p>
       </div>
    </div>
  )
}

export default Task