import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "@headlessui/react";
import boardsSlice from "../redux/boardsSlice";
import useDarkMode from "../Hooks/useDarkMode";

export default function HeaderDropDown({ setOpenDropdown, setIsBoardModalOpen}) {
    const dispatch = useDispatch();
    const [colorTheme, setTheme] = useDarkMode();
    const [ setDarkSide] = useState(
        colorTheme !== "light" ? true : false
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
                    key={board.id}
                    onClick={
                        ()=> {
                            dispatch(boardsSlice.actions.setBoardActive({ index }));
                        }
                    }
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            dispatch(boardsSlice.actions.setBoardActive({ index }));
                        }
                    }}
                    tabIndex={0}>
                        <img src="./assets/icon-board.svg" alt="board icon" className="filter-white h-4"/>{" "}
                        <p className="dark:text-gray-300 text-gray-600 font-semibold">
                            {board.name}
                        </p>
                    </div>
                ))}
                <div
                  onClick={
                    () => {setIsBoardModalOpen(true); setOpenDropdown(false);
                    }}
                  onKeyDown={() => {setIsBoardModalOpen(true); setOpenDropdown(false)}}
                  className="flex items-baseline space-x-2 text-[#635fc7] px-5 py-4">
                    <img src="./assets/icon-board.svg" alt="board icon" className="filter-white h-4"/>
                    <p className="dark:text-gray-300 text-gray-600 font-semibold">
                        + Create New Board
                    </p>
                  </div>

                <div className="flex items-baseline space-x-2 px-5 py-4 text-[#635fc7]">
                    <img src="./assets/icon-board.svg" alt="board icon" className="filter-white h-4"/>
                    <p className="dark:text-gray-300 text-gray-600 font-semibold">
                        + Create New Board
                    </p>
                    </div>

                    <div className="mx-2 p-4 space-x-2 bg-slate-100 dark:bg-[#20212c] flex justify-center items-center rounded-lg">
                        <img src="./assets/icon-light-theme.svg" alt="sun indicating light mode"/>

                        <Switch
                          checked={darkSide}
                          onChange={toggleDarkMode}
                          className="bg-[#635fc7] relative inline-flex h-6 w-11 items-center rounded-full">
                            <span className="sr-only">Enable dark mode</span>
                          </Switch>
                    </div>  
            </div>
        </div>

    </div>
  )
}