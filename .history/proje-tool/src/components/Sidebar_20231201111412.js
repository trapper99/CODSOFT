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
            is
         }></div>
    </div>
  )
}

export default Sidebar