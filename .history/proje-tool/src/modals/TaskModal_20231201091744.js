import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import boardsSlice from '../redux/boardsSlice'
import ElipsisMenu from '../components/ElipsisMenu'
import elipsis from '../assets/icon-vertical-ellipsis.svg'
import Subtask from '../components/Subtask'
import AddEditTaskModal from './AddEditTaskModal'
import DeleteModal from './DeleteModal'

function TaskModal({ taskIndex, colIndex, setIsTaskModalOpen }) {
    const dispatch = useDispatch();
    const [isElipsisMenuOpen, setIsElipsisMenuOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const boards = useSelector((state) => state.boards);
    const board = boards.find((board) => board.isActive === true);
    const columns = board.columns;
    const col = board.columns.find((col, i) => i === colIndex);
    const task = col.tasks.find((task, i) => i === taskIndex);
    const subtasks = task.subtasks;

    let completed = 0;
    subtasks.forEach((subtask) => {
        if (subtask.isCompleted) completed++;
    });

    const [status, setStatus] = useState(task.status);
    const [newColIndex, setNewColIndex] = useState(columns.indexOf(col));
    const onChange = (e) => {
        setStatus(e.target.value);
        setNewColIndex(e.target.selectedIndex);
    };

    const onClose = (e) => {
        if (e.target !== e.currentTarget) {
            return;
        }
        dispatch(boardsSlice.actions.setTaskStatus({
            taskIndex,
            colIndex,
            status,
            newColIndex,
        }));
        setIsTaskModalOpen(false);
    };

    const onDeleteBtnClick = (e) => {
        if (e.target.textContent === "Delete") {
            dispatch(boardsSlice.actions.deleteTask({ taskIndex, colIndex }));
            setIsDeleteModalOpen(false);
            setIsTaskModalOpen(false);
        } else {
            setIsTaskModalOpen(false);
        }
    };

    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

    const setOpenEditModal = () => {
        setIsAddTaskModalOpen(true);
        setIsElipsisMenuOpen(false);
    };
    
  return (
    <div
      onClick={onClose}
      className='fixed right-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide z-50 left-0 bottom-0 justify-center items-center flex dropdown'
      onKeyDown={onClose}
      >
        {/* Modal Section*/}

        <div className='scrollbar-hide overflow-y-scroll max-h-[95vh] my-auto bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto w-full px-8 py-8 rounded-xl'>
            <div className='relative flex justify-between w-full items-center'>
                <h1 className='text-lg'>{task.title}</h1>

                <img
                 onClick={() => {
                    setIsElipsisMenuOpen((prevState) => !prevState);
                 }}
                 onKeyDown={() => setIsElipsisMenuOpen((prevState) => !prevState)}
                 src={elipsis}
                 alt='elipsis'
                 className='cursor-pointer h-6'
                 />
                 {isElipsisMenuOpen && (
                    <ElipsisMenu 
                      setOpenEditModal={setOpenEditModal}
                      setOpenDeleteModal={setOpenDeleteModal}
                      type="Tasks"
                     />
                 )}
            </div>
            <p className='text-gray-500 font-[600] tracking-wide text-xs pt-6'>
                {task.description}
            </p>

            <p className='text-gray-500 tracking-widest text-sm pt-6'>

            </p>
        </div>
      </div>
  )
}

export default TaskModal