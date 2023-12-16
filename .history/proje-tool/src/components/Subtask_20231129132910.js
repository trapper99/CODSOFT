import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import boardsSlice from '../redux/boardsSlice'  

function Subtask({ index, taskIndex, colIndex }) {
    const dispatch = useDispatch();
    const boards = useSelector((state) => state.boards);
    const board = boards.find((board) => board.isActive === true);
    const col = board.columns.find((col, i) => i === colIndex);
    const task = col.tasks.find((task, i) => i === taskIndex);
    const subtask = task.subtasks.find((subtask, i) => i === index);
    const checked = subtask.isCompleted;
    
    const onChange = (e) => {
        dispatch(boardsSlice.actions.setSubtaskCompleted({
            index,
            colIndex,
            taskIndex,
        }));
    };

  return (
    <div className='w-full flex hover:bg-[#635fc740] dark:hover:bg-[#635fc740] rounded-md relative items-center justify-start dark:bg'>Subtask</div>
  )
}

export default Subtask