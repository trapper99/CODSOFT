import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import boardsSlice from "../redux/boardsSlice";
import Task from "./Task";

function Column({ colIndex, taskIndex }) {
  
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const col = board.columns.find((_col, i) => i === colIndex);

  useEffect(() => {
    const colors = [
        "bg-red-500",
        "bg-orange-500",
        "bg-blue-500",
        "bg-purple-500",
        "bg-green-500",
        "bg-indigo-500",
        "bg-yellow-500",
        "bg-pink-500",
        "bg-sky-500",
      ];
    
    setColor(shuffle(colors).pop())
  }, [color, dispatch]);



  const handleOnDrop = (e) => {
    const { prevColIndex, taskIndex } = JSON.parse(
      e.dataTransfer.getData("text")
    );

    if (colIndex !== prevColIndex) {
      dispatch(
        boardsSlice.actions.dragTask({ colIndex, prevColIndex, taskIndex })
      );
    }
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData(
          "text",
          JSON.stringify({ prevColIndex: colIndex})
        );
      }}
      onDragEnd={(e) => {
        e.dataTransfer.clearData();
      }}
      className="scrollbar-hide  mx-5 pt-[90px] min-w-[280px] "
    >
      <p className=" font-semibold flex  items-center  gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
        <div className={`rounded-full w-4 h-4 ${color} `} />
        {col?.name} {col?.tasks?.length}
      </p>
      
      {this.props.col?.tasks?.map((task, i) => (
        <Task
          key={taskIndex}
          task={task}
          colIndex={colIndex}
          taskIndex={i}
        />
      ))}
    </div>
  );
}

Column.propTypes = {
  name: PropTypes?.string?.isRequired,
  taskIndex: PropTypes?.array.isRequired,
  colIndex: PropTypes?.number.isRequired,
  }

export default Column;