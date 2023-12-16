import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskModal from "../modals/TaskModal"

function Task({ taskIndex, colIndex }) {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const columns = board.columns;
  const col = columns.find((board) => board.isActive === true);
  const task = col?.tasks?.find((task, i) => i === taskIndex);
  let completed = 0;
  let subtasks = task?.subtasks;
  subtasks?.forEach((subtask) => {
    if (subtask.isCompleted) completed++;
  });
  
  const handleOnDrag = (e) => {
    e.dataTransfer.setData(
      "text",
      JSON.stringify({
        taskIndex: taskIndex,
        colIndex: colIndex,
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
        <p className='font-bold tracking-wide'>{task?.title}</p>
        <p className='text-[#828FA3] font-bold text-xs tracking-tighter mt-2'>{completed} of {subtasks?.length} subtasks</p>
       </div>

      {isTaskModalOpen && (
        <TaskModal
         colIndex={colIndex}
         taskIndex={taskIndex}
         isTaskModalOpen={isTaskModalOpen}
         setIsTaskModalOpen={setIsTaskModalOpen}
        />
      )}
    </div>
  )
}

Task.propTypes = {
  boardIndex: React.PropTypes?.number,
  taskIndex: React.PropTypes?.number,
  colIndex: React.PropTypes?.number,
}

export default Task