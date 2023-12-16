import React, { useState } from 'react'
import logo from '../assets/logo-mobile.svg'
import iconDown from '../assets/icon-chevron-down.svg'
import elipsis from '../assets/icon-vertical-ellipsis.svg'
import iconUp from '../assets/icon-chevron-up.svg'
import { useDispatch, useSelector } from 'react-redux'
import boardsSlice from '../redux/boardsSlice';


function Header({ setIsBoardModalOpen, isBoardModalOpen }) {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isElipsisMenuOpen, setIsElipsisMenuOpen] = useState(false);
    const [boardType, setBoardType] = useState('add');
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

    const dispatch = useDispatch();
    const boards = useSelector((state) => state.boards);
    const board =  boards.find((board) => board.isActive);

    const onDropdownClick = () => {
       setOpenDropdown((state) => !state);
       setIsElipsisMenuOpen(false);
       setBoardType("add"); 
    };

    const setOpenEditModal = () => {
        setIsBoardModalOpen(true);
        setIsElipsisMenuOpen(false);
    };

    const setOpenDeleteModal = () => {
        setIsDeleteModalOpen(true);
        setIsElipsisMenuOpen(false);
    };

    const onDeleteBtnClick = (e) => {
        if (e.target.textContent === "Delete") {
            dispatch(boardsSlice.actions.deleteBoard());
            dispatch(boardsSlice.actions.setBoardActive({ index: 0}));
            setIsDeleteModalOpen(false);
        } else {
            setIsBoardModalOpen(false);
        }
    }

  return (
    <div className='p-4 fixed left-0 bg-white dark:bg-[#2b2c47] z-50 right-0'>

        <header className='flex justify-between dark:text-white item-center'>

            {/* Left Side */}

            <div className='flex items-center space-x-2 md:space-x-4'>
                <img src={logo} alt='logo' className='h-6 w-6' />
                <h3 className='md:text-4xl hidden md:inline-block font-bold font-sans text-black'>
                    kanban
                </h3>
                <div className='flex items-center' onKeyDown={onDropdownClick}>
                    <h3 className='truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans'>
                        {board.name}
                    </h3>
                    <img src={openDropdown ? iconUp: iconDown} alt='dropdown icon' className='w-3 ml-2 md:hidden'/>
                </div>
            </div>

            {/* Right Side */}

            <div className='flex space-x-4 items-center md:space-x-6'>
                <button className='button gidden md:block' onClick={() => {
                    setIsTaskModalOpen((prevState) => !prevState);
                }}
                >
                    + Add New Task                
                </button>
                <button className='button py-1 px-3 md:hidden' onClick={() => {
                    setIsTaskModalOpen((prevState) => !prevState);
                }}>
                    +
                </button>

                <img onClick={() => {
                    setBoardType("edit");
                    setOpenDropdown(false);
                    setIsElipsisMenuOpen((prevState) => !prevState);
                }}
                src={elipsis} alt='elipsis menu' className='w-5 h-5 cursor-pointer'
                onKeyDown={}
                />
            </div>
        </header>

    </div>
  )
}

export default Header