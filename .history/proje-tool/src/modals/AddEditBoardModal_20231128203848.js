import React, { useState } from 'react'
import crossIcon from '../assets/cross-icon.png'
import boardsSlice from '../redux/boardsSlice'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'

function AddEditBoardModal({setIsBoardModalOpen, type}) {
    const dispatch = useDispatch();
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [newColumns, setNewColumns] = useState([
        {
            id: uuidv4(),
            title: 'Todo',
            tasks: [],
        },
        {
            id: uuidv4(),
            title: 'Doing',
            tasks: [],
        },
    ]);
    const [isValid, setIsValid] = useState(true);
    const board = useSele
  return (
    <div>AddEditBoardModal</div>
  )
}

export default AddEditBoardModal