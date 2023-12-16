import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch } from '@'
import boardIcon from '../assets/icon-board.svg'
import darkIcon from '../assets/icon-dark-theme.svg'
import lightIcon from '../assets/icon-light-theme.svg'
import boardsSlice from '../redux/boardsSlice';
import AddEditBoardModal from '../modals/AddEditBoardModal';
import useDarkMode from '../Hooks/useDarkMode';
import showSidebarIcon from "../assets/icon-show-sidebar.svg"
import hideSidebarIcon from "../assets/icon-hide-sidebar.svg"

function Sidebar({ isSideBarOpen, setIsSideBarOpen}) {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar