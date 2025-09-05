import Button from '@tailus-ui/Button'
import { Moon, Sun } from 'lucide-react'
import { useStore } from '@nanostores/react'
import { $theme, setTheme } from '@store/switchers'
import { useEffect } from 'react'

const ThemeSwitcher = ({ size = 'md' }: { size?: 'md' | 'sm' | 'xs' }) => {
    const theme = useStore($theme)

    useEffect(() => {
        document.documentElement.classList.remove('dark', 'light')
        document.documentElement.classList.add(theme)
    }, [theme])

    return (
        <Button.Root onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')} aria-label={theme == 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} variant="ghost" intent="gray" size={size} className="relative">
            <Button.Icon type="only" size={size} className="-rotate-180 scale-150 opacity-0 duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100">
                <Sun />
            </Button.Icon>
            <Button.Icon type="only" size={size} className="absolute inset-0 duration-300 dark:rotate-180 dark:scale-0 dark:opacity-0">
                <Moon />
            </Button.Icon>
        </Button.Root>
    )
}

export default ThemeSwitcher
