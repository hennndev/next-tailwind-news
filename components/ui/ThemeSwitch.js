import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { IoMoon, IoSunny } from 'react-icons/io5'

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        theme !== 'light' ? (
            <IoSunny className="text-[19px] cursor-pointer mr-[15px] md:mr-0" onClick={() => setTheme('light')}/>
        ) : (
            <IoMoon className="text-[19px] cursor-pointer mr-[15px] md:mr-0" onClick={() => setTheme('dark')}/>
        )
    )
}
export default ThemeSwitch