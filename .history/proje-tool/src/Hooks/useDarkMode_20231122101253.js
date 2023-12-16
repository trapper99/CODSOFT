import React, { useState } from 'react'

function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme)
  const colorTheme = theme === 'light' ?? 'dar'
}

export default useDarkMode