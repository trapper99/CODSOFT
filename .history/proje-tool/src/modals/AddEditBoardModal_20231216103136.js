import React, { useState } from 'react'
import crossIcon from '../assets/icon-cross.svg'
import boardsSlice from '../redux/boardsSlice'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

interface AddEditBoardModalProps {
  setIsBoardModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: 'add' | 'edit';
  boardId?: string;
}

interface Column {
  id: string;
  title: string;
  tasks: string[];
}

/**
 * Renders the Add/Edit Board modal.
 *
 * @param {AddEditBoardModalProps} props - The component props.
 * @return {JSX.Element} The rendered component.
 */
function AddEditBoardModal({ setIsBoardModalOpen, type, boardId }: AddEditBoardModalProps): JSX.Element {
  const dispatch = useDispatch();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [newColumns, setNewColumns] = useState<Column[]>([
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
  const board = useSelector((state: RootState) => state.boards.find((board) => board.isActive));

  if (type === 'edit' && isFirstLoad) {
    setName(board.name);
    setDescription(board.description);
    setNewColumns(
      board.columns.map((col) => {
        return { ...col, id: uuidv4() };
      })
    );
    setIsFirstLoad(false);
  }

  const validate = ()=> {
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

  const onDelete = (id)=> {
    setNewColumns((prevState) => prevState.filter((el) => el.id !== id));
  };

  const onSubmit = (type) => {
    setIsBoardModalOpen(false);
    if (type === 'add') {
      dispatch(boardsSlice.actions.addBoard({ name, description, newColumns }));
    } else {
      dispatch(boardsSlice.actions.editBoard({ name, description, newColumns }));
    }
  };

  return (
    <div
      className="fixed right-0 top-0 px-2 py-4 overflow-y-scroll scrollbar-hide z-50 left-0 bottom-0 justify-center items-center flex dropdown"
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setIsBoardModalOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === 'Space') {
          setIsBoardModalOpen(false);
        }
      }}
    >
      <div className="scrollbar-hide overflow-y-scroll max-h-[95vh] bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] rounded-xl max-w-md mx-auto my-auto px-8">
        <h3 className="text-lg">{type === 'add' ? 'Add Board' : 'Edit

export default AddEditBoardModal