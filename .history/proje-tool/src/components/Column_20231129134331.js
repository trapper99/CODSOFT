import React from 'react'
import { shuffle} from 'lodash';
import { useDispatch, useSelector } from 'react-redux'
import boardsSlice from '../redux/boardsSlice'

function Column({ colIndex }) {
    const colors = [
        "bg-red-500",
        ""
    ];
  return (
    <div>Column</div>
  )
}

export default Column