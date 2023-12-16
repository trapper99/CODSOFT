/* eslint-disable no-undef */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import boardsSlice from '../redux/boardsSlice';
import iconCross from '../assets/icon-cross.svg';

function AddEditTaskModal({
    type,
    device,
    setIsTaskModalOpen,
    setIsAddTaskModalOpen,
    taskIndex,
    prevColIndex = 0,
}) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [description, setDescription] = useState('');
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [subtasks, setSubtasks] = useState([
        {
            id: uuidv4(),
            title: '',
            isCompleted: false,
        },
        {
            id: uuidv4(),
            title: '',
            isCompleted: false,
        },
    ]);
    const board = useSelector((state) => state.boards.find((board) => board.isActive));
    const columns = board.columns;
    const col = columns.find((col, index) => index === prevColIndex);
    const task = col ? col.tasks.find((task, index) => index === taskIndex): [];
    const [status, setStatus] = useState(columns[prevColIndex].name);
    const [newColIndex, setNewColIndex] = useState(prevColIndex);
    const [isSubtaskCompleted, setIsSubtaskCompleted] = useState(false);

    const onChangeSubtasks = (id, newValue) => {
        setSubtasks((prevState) => {
            const newState = [...prevState];
            const subtask = newState.find((subtask) => subtask.id === id);
            subtask.title = newValue;
            return newState;
        });
    };

    const onChangeStatus = (e) => {
        setStatus(e.target.value);
        setNewColIndex(e.target.selectedIndex);
    };

    const validate = () => {
        setIsValid(false);
        if (!title.trim()) {
            return false;
        }
        for (let i = 0; i < subtasks.length; i++) {
            if (!subtasks[i].title.trim()) {
                return false;
            }
        }
        setIsValid(true);
        return true;
    };

    if (type === "edit" && isFirstLoad) {
        setTitle(task.title);
        setDescription(task.description);
        setIsCompleted(task.isCompleted);
        setSubtasks(task.subtasks.map((subtask) => ({ ...subtask, id: uuidv4() })));
        setStatus(task.status);
        setIsFirstLoad(false);
    }

    const onDelete = (id) => {
        setSubtasks((prevState) => prevState.filter((subtask) => subtask.id !== id));
    };

    const onSubmit = (type) => {
        if (type === "add") {
            dispatch(
                boardsSlice.actions.addTask({
                    title,
                    description,
                    isCompleted,
                    subtasks,
                    status,
                    newColIndex,
                })
            );
            setIsTaskModalOpen(false);
            setIsAddTaskModalOpen(false);
        } else {
            dispatch(
                boardsSlice.actions.editTask({
                    title,
                    description,
                    isCompleted,
                    subtasks,
                    status,
                    newColIndex,
                })
            );
        }
    };
    
  return (
    <div className={
        device === "mobile"
        ? "py-6 px-6 pb-40 absolute overflow-y-scroll left-0 flex right-0 bottom-[-100vh] top-0 dropdown"
        : "py-6 px-6 pb-40 absolute overflow-y-scroll left-0 right-0 bottom-0 top-0 dropdown"
    }
    onClick={(e) => {
        if (e.target !== e.currentTarget) {
            return;
        }
        setIsTaskModalOpen(false);
        setIsAddTaskModalOpen(false);
    }}
    onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "Space") {
            setIsTaskModalOpen(false);
            setIsAddTaskModalOpen(false);
        }
    }}
    >
        {/* Dropdown Modal*/}

        <div className='scrollbar-hide overflow-y-scroll max-h-[95vh] my-auto bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold 
        shadow-md shadow-[#364e7e1a] max-w-md mx-auto w-full px-8 py-8 rounded-xl'>
            <h3 className='text-lg'>
                {type === "add" ? "Add Task" : "Edit Task"} Task
            </h3>

            {/* Task Name*/}

            <div className='mt-8 flex flex-col space-y-1'>
                <label className='text-sm dark:text-white text-gray-500'>
                    Task Name
                </label>
                <input 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id='task-name-input'
                  type='text'
                  className='bg-transparent px-4 py-2 outline-none focus:border-0 rounded-md text-sm border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-[1px]'
                  placeholder='e.g Take Coffee break'
                />
            </div>

            {/* Description */}

            <div className='mt-8 flex flex-col space-y-1'>
                <label className='text-sm dark:text-white text-gray-500'>
                    Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id='task-description-input'
                  type='text'
                  className='bg-transparent px-4 py-2 outline-none min-h-[200px] focus:border-0 rounded-md text-sm border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-[1px]'
                  placeholder="It's always a good day to take a break. This 15 minute break will recharge my batteries a little."
                />
            </div>

            {/* Subtasks */}

            <div className='mt-8 flex flex-col space-y-3'>
                <label className='text-sm dark:text-white text-gray-500'>
                    Subtasks
                </label>
                {subtasks.map((subtask) => (
                    <div key={subtask.id} className='flex items-center w-full'>
                        <input 
                          onChange={(e) => {
                            onChangeSubtasks(subtask.id, e.target.value);
                          }}
                          type='text'
                          value={subtask.title}
                          className='bg-transparent outline-none focus:border-0 flex-grow px-4 py-2 rounde-md text-sm border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-[1px]'
                          placeholder='e.g. Make coffee'/>
                          <img src={iconCross}
                            onClick={() => {
                                onDelete(subtask.id);
                            }}
                            className='m-4 cursor-pointer'
                            onKeyDown={() => onDelete(subtask.id)}
                            alt='delete'/>
                    </div>
                ))}

                <button className='w-full items-center dark:text-[#635fc7] dark:bg-white '></button>
            </div>
        </div>
    </div>
  )
}

// eslint-disable-next-line react/no-typos
AddEditTaskModal.proptypes = {
    type: PropTypes.string,
    device: PropTypes.string,
    setIsTaskModalOpen: PropTypes.func,
    setIsAddTaskModalOpen: PropTypes.func,
    taskIndex: PropTypes.number,
    prevColIndex: PropTypes.number,
    // eslint-disable-next-line no-undef
    newColIndex: PropTypes.number
};

export default AddEditTaskModal;