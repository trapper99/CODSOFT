import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import boardsSlice from '../redux/boardsSlice'  

function Subtask({ index, taskIndex, colIndex }) {
    const dispatch = useDispatch();
    const boards = useSelector((state) => state.boards);
    const board = boards.fin
  return (
    <div>Subtask</div>
  )
}

export default Subtask