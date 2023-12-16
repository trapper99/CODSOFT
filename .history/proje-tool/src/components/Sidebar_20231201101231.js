import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import boardsSlice from '../redux/boardsSlice';
import AddEditBoardModal from '../modals/AddEditBoardModal';
import useDarkMode from '../Hooks/useDarkMode';


function Sidebar({ isSideBarOpen, setIsSideBarOpen}) {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar