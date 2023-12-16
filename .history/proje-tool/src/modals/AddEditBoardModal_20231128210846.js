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
        setNewColumns((prevState) => {
            const newState = new Map(prevState.map((col) => [col.id, col]));
            const col = newState.get(id);
            col.title = newValue;
            return Array.from(newState.values());
        });
    };

    const onDelete = (id) => {
        setNewColumns((prevState) => prevState.filter((col) => col.id !== id));
    };

    const onSubmit = (type) => {
        setIsBoardModalOpen(false);
        if (type === "add") {
            dispatch(boardsSlice.actions.addBoard({ name, description ,newColumns}));
        } else {
            dispatch(boardsSlice.actions.editBoard({ name, description, newColumns}));
        }
    };

    return (
    <div className='fixed right-0 top-0 px-2 py-4 overflow-y-scroll scrollbar-hide z-50 left-0 bottom-0 justify-center items-center flex dropdown'
    onClick={(e) => {
        if (e.target !== e.currentTarget) {
            return;
        }
        setIsBoardModalOpen(false);
    }}
    onKeyDown={
        (e) => {
            if (e.key === "Enter" || e.key === "Space") {
                setIsBoardModalOpen(false);
            }
        }
    }>
        <div className='scrollbar-hide overflow-y-scroll max-h-[95vh] bg'></div>
    </div>
  );
}

export default AddEditBoardModal