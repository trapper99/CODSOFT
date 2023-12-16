import _ from 'lodash';
import React, { useMemo, useCallback } from 'react'
import { useDispatch} from 'react-redux'
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

/**
 * Renders a column component.
 * @param {Object} props - The properties object.
 * @param {Object} props.col - The column object.
 * @returns {JSX.Element} - The rendered column component.
 */
function Column({ col }) {
    const dispatch = useDispatch();

    const color = useMemo(() => _.shuffle(colors), [color]);

    const handleOnDrop = useCallback((e) => {
        try {
            const { prevColIndex, taskIndex } = JSON.parse(
                e.dataTransfer.getData("text")
            );

            if (col.id !== prevColIndex) {
                dispatch(
                    boardsSlice.actions.moveTask({
                        prevColIndex,
                        newColIndex: col.id,
                        taskIndex,
                    })
                );
            }
        } catch (error) {
            
        }
    }, [col.id, dispatch]);

    const handleOnDragOver = useCallback((e) => {
        e.preventDefault();
    }, []);

const renderTasks = (tasks) => {
    return tasks.map(task => (
        <Task
            key={task.id}
            taskIndex={task.index}
            colIndex={col.id}
            task={task}
        />
    ));
};

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

            {renderTasks(col.tasks, col.id)}
        </div>
    );
}

export default Column