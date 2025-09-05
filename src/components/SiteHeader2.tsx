import { useState, useEffect } from 'react'
import Tooltip from '@tailus-ui/Tooltip'
import { GitHubIcon } from './utilities/icons'
import Separator from './tailus-ui/Separator'
import { SITE_SOCIAL_GITHUB, SITE_SOCIAL_TWITTER } from 'src/const'
import { setIsOpen } from '@store/customizer'
import BrandIcon from './utilities/BrandIcon'
import Button from './tailus-ui/Button'
import { Moon, Palette, Sun } from 'lucide-react'

export function SiteHeader() {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark')
        }
        return false
    })

    useEffect(() => {
        setDarkMode(document.documentElement.classList.contains('dark'))
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
        localStorage.setItem('color-theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    const handleThemeToggle = () => {
        setDarkMode((prevMode) => !prevMode)
    }
    return (
        <header data-rounded="full" className="fixed inset-x-0 bottom-6 z-50 mx-auto max-w-xl px-6 sm:px-14">
            <div className="rounded-btn card-shadow feedback-bg flex items-center gap-1.5 border p-1.5">
                <Button.Root variant="ghost" intent="gray" aria-label="Code Source" href={SITE_SOCIAL_GITHUB}>
                    <Button.Icon type="only">
                        <BrandIcon className="h-6 w-6" />
                    </Button.Icon>
                </Button.Root>
                <Separator orientation="vertical" className="h-4" fancy />
                <div className="flex h-fit gap-px">
                    <Button.Root variant="ghost" intent="gray" size="sm">
                        <Button.Label className="font-medium">React</Button.Label>
                    </Button.Root>
                    <Button.Root variant="soft" intent="gray" size="sm">
                        <Button.Label className="font-medium">Html</Button.Label>
                    </Button.Root>
                    <Button.Root variant="ghost" intent="gray" size="sm">
                        <Button.Label className="font-medium">Themer</Button.Label>
                    </Button.Root>
                </div>

                <div className="ml-auto flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                        <Button.Root variant="ghost" intent="gray" aria-label="Twitter account" href={SITE_SOCIAL_TWITTER}>
                            <Button.Icon type="only" size="xs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"></path>
                                </svg>
                            </Button.Icon>
                        </Button.Root>
                        <Button.Root variant="ghost" intent="gray" aria-label="Code Source" href={SITE_SOCIAL_GITHUB}>
                            <Button.Icon type="only">
                                <GitHubIcon />
                            </Button.Icon>
                        </Button.Root>
                    </div>
                    <Separator orientation="vertical" className="h-4" fancy />
                    <div className="flex gap-0.5">
                        <Tooltip.Provider>
                            <Tooltip.Root>
                                <Tooltip.Trigger asChild>
                                    <Button.Root onClick={setIsOpen} variant="ghost" intent="gray" aria-label="Open customizer panel">
                                        <Button.Icon type="only">
                                            <Palette />
                                        </Button.Icon>
                                    </Button.Root>
                                </Tooltip.Trigger>
                                <Tooltip.Portal>
                                    <Tooltip.Content data-rounded="full" fancy inverted={false} sideOffset={8}>
                                        Customize
                                    </Tooltip.Content>
                                </Tooltip.Portal>
                            </Tooltip.Root>
                        </Tooltip.Provider>

                        <Button.Root onClick={handleThemeToggle} variant="ghost" intent="gray" aria-label="Code Source" className="relative">
                            <Button.Icon type="only" className="absolute inset-0 m-auto -rotate-180 scale-[2] opacity-0 transition duration-500 group-active:scale-90 dark:rotate-0 dark:scale-100 dark:opacity-100">
                                <Sun />
                            </Button.Icon>

                            <Button.Icon type="only" className="relative scale-100 text-gray-950 transition duration-500 group-active:scale-90 dark:rotate-90 dark:scale-0 dark:opacity-0">
                                <Moon />
                            </Button.Icon>
                        </Button.Root>
                    </div>
                </div>
            </div>
        </header>
    )
}
