import React, { useState } from 'react'
import logo from '../assets/logo-mobile.svg'
import { useDispatch, useSelector } from 'react-redux'
import boardsSlice from '../redux/boardsSlice';


function Header({ setIsBoardModalOpen, isBoardModalOpen }) {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isElipsisMenuOpen, setIsElipsisMenuOpen] = useState(false);
    const [boardType, setBoardType] = useState('add');
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
            dispatch(boardsSlice.actions.setBoardActive)
        }
    }

  return (
    <div className='p-4 fixed left-0 bg-white dark:bg-[#2b2c47] z-50 right-0'>

        <header className='flex justify-between dark:text-white item-center'>

            {/* Left Side */}

            <div className='flex items-center space-x-2 md:space-x-4'>
                <img src={logo} alt='logo' className='h-6 w-6' />
                <h3 className='md:text-4xl hidden md:inline-block font-bold font-sans'>
                    kanban
                </h3>
                <div className='flex items-center'>
                    <h3 className='truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans'>
                        {}
                    </h3>
                    {/*TODO: add a dropdown icon menu*/}
                    <img src='' alt='dropdown icon' className='w-3 ml-2 md:hidden' onClick={onDropdownClick}/>
                </div>
            </div>
        </header>

    </div>
  )
}

export default Header