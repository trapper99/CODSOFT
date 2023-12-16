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
    onKeyDown={(e) }
    >

    </div>
  )
}