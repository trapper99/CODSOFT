import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AddEditBoardModal from '../modals/AddEditBoardModal'
import Column from './Column'
import EmptyBoard from './EmptyBoard'
import Sidebar from './Sidebar'

function Home() {
    const [windowSize, setWindowSize ] = useState([
        window.innerWidth,
        window.innerHeight
    ]);

    useEffect(() => {
        function handleResize() {
            setWindowSize([
                window.innerWidth,
                window.innerHeight
            ]);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);
    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

    const boards = useSelector((state) => state.boards);
    const activeBoard = boards.find((board) => board.isActive);
    const columns = activeBoard.columns;

    const [isSideBarOpen, setIsSideBarOpen ] = useState(false);
  return (
    <div
     className={
        windowSize[0]
     }>Home</div>
  )
}

export default Home