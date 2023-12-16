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

    const boards = useSelector(())
    
  return (
    <div>HeaderDropDown</div>
  )
}
