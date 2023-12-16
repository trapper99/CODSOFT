import React, { useState } from 'react'
import crossIcon from '../assets/icon-cross.svg'
import boardsSlice from '../redux/boardsSlice'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'

function AddEditBoardModal({setIsBoardModalOpen, type, boardId}) {
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
    const board = useSelector((state) => state.boards)?.find((board) => board.isActive);

    if (type === "edit" && isFirstLoad) {
        setName(board.name);
        setDescription(board?.description);
        setNewColumns(board?.columns.map((col) => {
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

    /**
     * Deletes an element from the newColumns state array based on the given id.
     *
     * @param {number} id - The id of the element to be deleted.
     * @return {void} This function does not return a value.
     */
    const onDelete = (id) => {
        setNewColumns((prevState) => prevState.filter((el) => el.id !== id));
    };

/**
 * Handles the form submission.
 *
 * @param {string} type - The type of submission ("add" or "edit").
 * @return {undefined} This function does not return a value.
 */
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
        <div className='scrollbar-hide overflow-y-scroll max-h-[95vh] bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold
        shadow-md shadow-[#364e7e1a] rounded-xl max-w-md mx-auto my-auto px-8'>
            <h3 className='text-lg'>
                {type === "add" ? "Add Board" : "Edit Board"}
            </h3>

            {/* Task Name */}

            <div className="mt-8 flex flex-col space-y-1">
                <label className="text-sm dark:text-white text-gray-500">Board Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="board-name-input"
                    type="text"
                    className="bg-transparent px-4 py-2 outline-none focus:border-0 rounded-md text-sm border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-[1px]"
                    placeholder="e.g. Web Design"
                />
            </div>

            {/* Board Columns */}

            <div className='mt-8 flex flex-col space-y-3'>
                <label className='text-sm dark:text-white text-gray-500'>
                    Board Columns
                </label>

                {newColumns.map((column) => (
                    <div key={column.id} className='flex items-center w-full'>
                        <input className='bg-transparent flex-grow-0 px-4 py-2 rounded-md text-sm border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-[1px]'
                        onChange={
                            (e) => {
                                onChange(column.id, e.target.value);
                            }
                        }
                        placeholder='e.g. Todo'
                        id={"board-column-input"}
                        type='text'
                        value={column.name}
                        />
                        <img src={crossIcon}
                         onClick={() => {
                            onDelete(column.id);
                         }}
                         className='m-4 cursor-pointer'
                         alt='delete'
                         onKeyDown={() => {
                            onDelete(column.id);
                         }}
                         />
                    </div>
                ) )}
                <div>
                    <button
                      className='w-full items-center hover:opacity-70 dark:text-[#635fc7] dark:bg-white text-white bg-[#635fc7] py-2 rounded-full'
                        onClick={() => {
                            setNewColumns((state) => [
                                ...state,
                                {
                                    id: uuidv4(),
                                    name: "",
                                    tasks: [],
                                },
                            ]);
                        }}>
                        + Add New Column
                    </button>
                    <button
                      onClick={() => {
                        isValid();
                        validate
                        
                        if (isValid === true) {
                            onSubmit(type);
                            setIsBoardModalOpen(false);
                      }}}
                      className='w-full items-center hover:opacity-70 dark:text-white dark:bg-[#635fc7] mt-8 relative text-white bg-[#635fc7] py-2 bottom-4 rounded-full'>
                        {type === "add" ? "Add New Board" : "Save Changes"}
                      </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AddEditBoardModal