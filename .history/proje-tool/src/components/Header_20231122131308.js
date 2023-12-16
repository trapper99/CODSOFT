import React from 'react'
import logo from ''

function Header() {
  return (
    <div className='p-4 fixed left-0 bg-white dark:bg-[#2b2c47] z-50 right-0'>

        <header className='flex justify-between dark:text-white item-center'>

            {/* Left Side */}

            <div>
                <img src={logo} alt='logo' />
            </div>
        </header>

    </div>
  )
}

export default Header