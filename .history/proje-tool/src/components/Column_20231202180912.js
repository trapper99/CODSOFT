import React, { useState } from 'react'
import { shuffle} from 'lodash';
import { useDispatch, useSelector } from 'react-redux'
import boardsSlice from '../redux/boardsSlice'
import Task from './Task'

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

function Column({ colIndex }) {
    const dispatch = useDispatch();
    const [color, setColor] = useState<string | null>(false);
    const col = useSelector((state) => state.boards.find((board) => board.isActive === true)?.columns[colIndex]);

    useEffect(() => {
        setColor(_.sample(colors));
    }, [colIndex]);

    const handleOnDrop = useCallback((e) => {
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
    }, [colIndex, dispatch]);

    const handleOnDragOver = useCallback((e) => {
        e.preventDefault();
    }, []);

    return (
        <div
            onDrop={handleOnDrop}
            onDragOver={handleOnDragOver}
            className="scrollbar-hide mx-5 pt-[90px] min-w-[280px]"
        >
            <p className="font-semibold flex items-center gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
                <div className={`rounded-full w-4 h-4 ${color}`} />
                {col.name} ({col.tasks.length})
            </p>

            {col.tasks.map((task) => (
                <Task
                    key={task.id}
                    taskIndex={task.index}
                    colIndex={colIndex}
                    task={task}
                />
            ))}
        </div>
    );
}

export default Column