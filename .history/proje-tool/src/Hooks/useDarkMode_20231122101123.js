import React, { useState } from 'react'

function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.t)
}

export default useDarkMode