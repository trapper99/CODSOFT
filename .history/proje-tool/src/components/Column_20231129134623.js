import React from 'react'
import { shuffle} from 'lodash';
import { useDispatch, useSelector } from 'react-redux'
import boardsSlice from '../redux/boardsSlice'

function Column({ colIndex }) {
    const colors = [
        "bg-red-500",
        "bg-orange-500",
        "bg-yellow-500",
        "bg-green-500",
        "bg-teal-500",
        "bg-blue-500",
        "bg-indigo-500",
        "bg-purple-500",
        "bg-pink-500",
    ];

    const dispatch = useDispatch();
    const [color, set]
  return (
    <div>Column</div>
  )
}

export default Column