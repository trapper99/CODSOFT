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
function Column({ colIndex }) {
  const dispatch = useDispatch();

  const color = useMemo(() => _.shuffle(colors), []);

  const handleOnDrop = useCallback((e) => {
    try {
      const { prevColIndex, taskIndex } = JSON.parse(
        e.dataTransfer.getData("text")
      );

      if (colIndex !== prevColIndex) {
        dispatch(
          boardsSlice.actions.moveTask({
            prevColIndex: prevColIndex,
            newColIndex: colIndex,
            taskIndex,
          })
        );
      }
    } catch (error) {
      console.error("Error parsing dropped data:", error);
    }
  }, [colIndex, dispatch]);

  const handleOnDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const renderTasks = (tasks) => {
    return tasks.map((task) => (
      <Task key={task.id} taskIndex={task.index} colIndex={col.id} task={task} />
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
        {col.name} ({colIndex.tasks.length})
      </p>

      {renderTasks(colIndex.tasks)}
    </div>
  );
}

export default Column