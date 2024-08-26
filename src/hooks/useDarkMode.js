import { useState } from 'react'

export function useDarkMode() {
    const [isDark, setIsDark] = useState(false)

    const handleDark = () => {
        setIsDark(prevState => !prevState)
    }

    return { isDark, handleDark }

}