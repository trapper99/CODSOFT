/* eslint-disable no-undef */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

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
            const new
        })
    }
  return (
    <div>AddEditTaskModal</div>
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