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
        windowSize[0] >= 768 && isSideBarOpen
          ? 'bg-[#f4f7fd] scrollbar-hide h-screen flex dark:bg-[#20212c] overflow-x-scroll gap-6 ml-[261px]'
          : 'bg-[#f4f7fd] scrollbar-hide h-screen flex dark:bg-[#20212c] overflow-x-scroll gap-6'
     }>
        {windowSize[0] >= 768 && (
            <Sidebar
             isSideBarOpen={isSideBarOpen}
             setIsSideBarOpen={setIsSideBarOpen}
             isBoardModalOpen={isBoardModalOpen}
             setIsBoardModalOpen={setIsBoardModalOpen}
            />
        )}

        {/* Column Section */}

        {columns.length > 0 ? (
            <>
                {columns.map((column) => (
                    <Column
                     key={column.id}
                     column={column}

                    />
                ))}
                <div
                  onClick={() => {
                    setIsBoardModalOpen(true);
                  }}
                  onKeyDown={() => {
                    setIsBoardModalOpen(true);
                  }}
                  className='h-screen dark:bg-[#2b2c3740] flex justify-center items-center font-bold text-2xl hover:text-[#635FC7] transition duration-300 cursor-pointer bg-[#E9EFFA] scrollbar-hide mb-2   mx-5 pt-[90px] min-w-[280px] text-[#828FA3] mt-[135px]'>
                    + Add New Column
                  </div>
            </>
        ) : (
            <EmptyBoard
                 isBoardModalOpen={isBoardModalOpen}
                 setIsBoardModalOpen={setIsBoardModalOpen}
                 key={"add"}
                 type={"add"}
                />
        )}
        {isBoardModalOpen && (
            <AddEditBoardModal
             isBoardModalOpen={isBoardModalOpen}
             setIsBoardModalOpen={setIsBoardModalOpen}
             type={"edit"}
             key={"edit"}
            />
        )}
     </div>
  )
}

export default Home