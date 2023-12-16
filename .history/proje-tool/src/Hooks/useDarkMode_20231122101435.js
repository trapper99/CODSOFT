import React, { useEffect, useState } from 'react'

function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme)
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const ro
  })
}

export default useDarkMode