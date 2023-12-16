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
    }, [])
  return (
    <div>Home</div>
  )
}

export default Home