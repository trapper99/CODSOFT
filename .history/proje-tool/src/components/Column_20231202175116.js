import React, { useState } from 'react'
import { shuffle} from 'lodash';
import { useDispatch, useSelector } from 'react-redux'
import boardsSlice from '../redux/boardsSlice'
import Task from './Task'

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
    const [color, setColor] = useState(null);
    const boards = useSelector((state) => state.boards);
    const board = boards.find((board) => board.isActive === true);
    const col = board.columns.find((col, i) => i === colIndex);
    useEffect(() => {
        setColor(shuffle(colors).pop())
    }, [dispatch]);

    const handleOnDrop = (e) => {
        const { prevColIndex, taskIndex } = JSON.parse(
            e.dataTransfer.getData("text")
        );

        if (colIndex !== prevColIndex) {
            dispatch(
                boardsSlice.actions.moveTask({
                    prevColIndex,
                    newColIndex: colIndex,
                    taskIndex,
                })
            );
        }
    };

    const handleOnDragOver = (e) => {
        e.preventDefault();
    };

  return (
    <div
      onDrop={handleOnDrop}
      onDragover={handleOnDragOver}
      className='scrollbar-hide mx-5 pt-[90px] min-w-[280px]'>
        <p className='font-semibold flex items-center gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]'>
            <div className={`rounded-full w-4 h-4 ${color}`} />
            {col.name} ({col.tasks.length})
        </p>

        {col.tasks.map((task) => (
            <Task key={task.id} taskIndex={task.index} colIndex/>
        ))}
    </div>
  )
}

export default Column