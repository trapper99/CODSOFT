import React from 'react'
import logo from '../assets/logo-mobile.svg'


function Header() {

    const onDropdownClick = 

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
                    <img src='' alt='dropdown icon' className='w-3 ml-2 md:hidden' onClick={}/>
                </div>
            </div>
        </header>

    </div>
  )
}

export default Header