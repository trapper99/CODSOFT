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
    const board = useSelector((state) => state.boads).find((board) => board.isActive);

    if (type === "edit" && isFirstLoad) {
        setName(board.name);
        setDescription(board.description);
        setNewColumns(board.columns.map((col) => {
            return { ...col, id: uuidv4() };
        }));
        setIsFirstLoad(false);
    }

    const validate = () => {
        setIsValid(false);
        if (!name.trim()) {
            return false;
        }
        for (let i = 0; i < newColumns.length; i++) {
            if (!newColumns[i].title.trim()) {
                return false;
            }
        }
        setIsValid(true);
        return true;
    };
    
    const onChange = (id, newValue) => {

    };
  return (
    <div>AddEditBoardModal</div>
  )
}

export default AddEditBoardModal