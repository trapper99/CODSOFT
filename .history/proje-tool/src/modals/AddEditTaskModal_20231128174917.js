/* eslint-disable no-undef */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function AddEditTaskModal({
    type,
    device,
    setIsTaskModalOpen,
    setIsAddTaskModalOpen,
    taskIndex,
    prevColIndex = 0,
    newColIndex = 0
}) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [subtasks, setSubtasks] = useState([]);
    const board = useSelector((state) => state.boards.find((board) => board.isActive));
    const columns = board.columns;
    const col = columns.find((col, index) => index === prevColIndex);
    const task = col ? col.tasks.find((task, index) => index === tas);
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