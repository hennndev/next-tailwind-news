import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { IoMoon, IoSunny } from 'react-icons/io5'

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderThemeChanger= () => {
        if(!mounted) return null;
        const currentTheme = theme === "system" ? systemTheme : theme ;

        if(currentTheme ==="dark"){
            return (
                <IoSunny className="text-[19px] cursor-pointer mr-[15px] md:mr-0" onClick={() => setTheme('light')}/>
            )
        }

        else {
            return (
                <IoMoon className="text-[19px] cursor-pointer mr-[15px] md:mr-0" onClick={() => setTheme('dark')}/>
            )
        }
    };

    return renderThemeChanger()
}
export default ThemeSwitch