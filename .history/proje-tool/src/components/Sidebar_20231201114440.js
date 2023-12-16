import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch } from '@headlessui/react'
import boardIcon from '../assets/icon-board.svg'
import darkIcon from '../assets/icon-dark-theme.svg'
import lightIcon from '../assets/icon-light-theme.svg'
import boardsSlice from '../redux/boardsSlice';
import AddEditBoardModal from '../modals/AddEditBoardModal';
import useDarkMode from '../Hooks/useDarkMode';
import showSidebarIcon from "../assets/icon-show-sidebar.svg"
import hideSidebarIcon from "../assets/icon-hide-sidebar.svg"

function Sidebar({ isSideBarOpen, setIsSideBarOpen}) {
    const dispatch = useDispatch();
    const [colorTheme, setTheme] = useDarkMode();
    const [isBoardModalOpen, setIsBoardModalOpen]= useState(false);
    const [darkSide, setDarkSide] = useState(
        colorTheme !== "light"
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    const boards = useSelector((state) => state.boards);

    const toggleSidebar = () => {
        setIsSideBarOpen((state) => !state);
    };

  return (
    <div>
        <div
         className={
            isSideBarOpen
              ? 'min-w-[261px] bg-white dark:bg-[#2b2c47] fixed top-[72px] h-screen items-center left-0 z-20'
              : 'bg-[#6355FC7] dark:bg-[#2b2c37] dark:hover:bg-[#635FC7] top-auto bottom-10 justify-center items-center hover:opacity-80 cursor-pointer p-0 transition duration-300 transform fixed flex w-[56px] h-[48px] rounded-r-full'
         }>
            <div>
                {/* rewrite modal */}

                {isSideBarOpen && (
                    <div className='bg-white dark:bg-[#2b2c37] w-full py-4 rounded-xl'>
                        <h3 className='dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8'>
                            ALL BOARDS ({boards.length})
                        </h3>

                        <div className='dropdown-board flex flex-col h-[70vh] justify-between'>
                            <div>
                                {boards.map((board) => (
                                    <div
                                     className={'flex items-baseline space-x-2 px-5 mr-8 rounded-r-full duration-500 ease-in-out py-4 cursor-pointer hover:bg-[#635fc71a] hover:text-[#635fc7] dark:hover:bg-white dark:hover:text-[#635fc7] dark:text-white'}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
         </div>
    </div>
  )
}

export default Sidebar