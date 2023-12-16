import React, { useState } from 'react'

function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme)
  
}

export default useDarkMode