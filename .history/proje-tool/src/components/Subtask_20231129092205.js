import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import boardsSlice from '../redux/boardsSlice'  

function Subtask({ index, taskIndex, colIndex }) {
    const dispatch = useDispatch();
    const boards = useSelector((state) => state.boards);
    const board = boards.find((board) => board.isActive === true);
    const col = board.columns.find((col, i) => i === colIndex);
    const task = col.tasks.find((task, i) => i === taskIndex);
    const subtask = task.subtasks.find((subtask, i) => i === index) 
  return (
    <div>Subtask</div>
  )
}

export default Subtask