import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import boardsSlice from "../redux/boardsSlice";
import useDarkMode from "../Hooks/useDarkMode";

export default function HeaderDropDown({ setOpenDropdown, setIsBoardModalOpen}) {
    const dispatch = useDispatch();
    const [colorTheme, setTheme] = useDarkMode();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    const boards = useSelector((state) => state.boards);
    
  return (
    <div className="py-10 px-6 absolute left-0 right-0 bottom-[-100vh] top-16 dropdown"
    onClick={(e) => {
        if (e.target !== e.currentTarget) {
            return;
        }
        setOpenDropdown(false);
    }}
    onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "Space") {
            setOpenDropdown(false);
        }
    }}
    >
        {/* Dropdown Modal*/}

        <div className="bg-white dark:bg-[#2b2c37] shadow-md shadow-[#364e7e1a] w-full py-4 rounded-xl">
            <h3 className="dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8">
                ALL BOARDS ({boards?.length})
            </h3>

            <div className="dropdown-board">
                {boards.map((board, index) => (
                    <div className={` flex items-baseline space-x-2 px-5 py-4 ${
                        board.isActive && "bg-[#635fc7] rounded-r-full text-white mr-8 "
                    }`}
                    key={index}
                    onClick={
                        ()=> {
                            dispatch(boardsSlice.actions.setBoardActive({ index }));
                        }
                    }
                    onKeyDown={(event)}
                    tabIndex={0}>

                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}