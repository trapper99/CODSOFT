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
    const [subtasks, setSubtasks] = useState([]);
  return (
    <div>AddEditTaskModal</div>
  )
}

AddEditTaskModal.proptypes

export default AddEditTaskModal