import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import boardsSlice from '../redux/boardsSlice';
import Task from './Task';

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

  const { boards } = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const col = board.columns[colIndex];
  const colName = col.name;

  const color = use(() => {
    const shuffledColors = [...colors].sort(() => Math.random() - 0.5);
    return shuffledColors[0];
  }, [dispatch]);

  const handleOnDrop = useCallback((e) => {
    try {
      const { prevColIndex, taskIndex } = JSON.parse(
        e.dataTransfer.getData("text")
      );

      if (colIndex !== prevColIndex) {
        dispatch(
          boardsSlice.actions.dragTask({
            prevColIndex,
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

  const renderTasks = () => {
    return col.tasks.map((task, index) => (
      <Task key={task.id} taskIndex={index} colIndex={colIndex} task={task} />
    ));
  };

  return (
    <div
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
      className='scrollbar-hide mx-5 pt-[90px] min-w-[280px]'>
      <p className="font-semibold flex items-center gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
        <div className={`rounded-full w-4 h-4 ${color}`}/>
        {`${colName} (${col.tasks.length} ${col.tasks.length === 1 ? 'task' : 'tasks'})`}
      </p>

      <div className="flex flex-col gap-2 mt-4">
        {renderTasks()}
      </div>
    </div>
  );
}

export default Column;
