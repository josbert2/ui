import Button from '@tailus-ui/Button'
import { Kbd, Text, Title } from '@tailus-ui/typography'
import { Brush, Layers2, Moon, Palette, Square, Sun } from 'lucide-react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { PaletteSwitcher } from './PaletteSwitcher'
import { ShadeSwitcher } from './ShadeSwitcher'
import { RoundedSwitcher } from './RoundedSwitcher'
import { useState, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '@nanostores/react'
import { $palette, $rounded, $shade, $theme, setTheme } from '@store/switchers'
import CodeSnippet from '@components/utilities/CodeSnippet'
import { useMedia } from 'use-media'
import type { Theme } from 'src/types'

const radioItem = 'relative rounded-[calc(var(--btn-radius)-3px)] delay-75 duration-300 flex items-center justify-center h-8 px-2.5 gap-2 text-[--caption-text-color] transition-[color] hover:text-[--body-text-color] data-[state=checked]:scale-95 transition-transform will-change data-[state=checked]:text-[--title-text-color]'

export default function BlocksCustomizer({ global = false }: { global?: boolean }) {
    const [isActive, setIsActive] = useState(false)
    const customizerRef = useRef<HTMLDivElement>(null)
    const triggerButtonRef = useRef<HTMLButtonElement>(null)
    const isMedium = useMedia('(min-width: 768px)')

    const palette = useStore($palette)
    const rounded = useStore($rounded)
    const shade = useStore($shade)
    const theme = useStore($theme)

    const initialAnimation = isMedium ? { x: 560 } : { y: 720 }
    const animate = isMedium ? { x: 0 } : { y: 0 }
    const exitAnimation = isMedium ? { x: 560, opacity: 0, scale: 0.95 } : { y: 720, opacity: 0, scale: 0.95 }

    const handleValueChange = (theme: Theme) => {
        setTheme(theme)

        const iframes = document.querySelectorAll('iframe') as NodeListOf<HTMLIFrameElement>
        iframes.forEach((iframe) => {
            try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
                if (iframeDoc && iframeDoc.location.origin === window.location.origin) {
                    if (theme === 'dark') {
                        iframeDoc.documentElement.classList.add('dark')
                    } else {
                        iframeDoc.documentElement.classList.remove('dark')
                    }
                }
            } catch (e) {
                console.error('Could not change theme in iframe:', e)
            }
        })
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (customizerRef.current && !customizerRef.current.contains(event.target as Node) && triggerButtonRef.current && !triggerButtonRef.current.contains(event.target as Node)) {
                setIsActive(false)
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 't') {
                setIsActive(!isActive)
            }
            if (isActive && event.key === 'Escape') {
                setIsActive(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        if (isActive) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isActive])

    return (
        <>
            {/* @ts-ignore */}
            <Button.Root data-rounded="full" ref={triggerButtonRef} onClick={() => setIsActive(!isActive)} variant="soft" size="sm" intent="gray" className="border border-gray-950/5 bg-gray-950/5 dark:border-white/5" aria-label="Open customizer">
                <Button.Icon type="leading" size="xs">
                    <Brush />
                </Button.Icon>
                <Button.Label className="-mr-2 -mt-px ml-1">
                    <Kbd className="rounded-full">T</Kbd>
                </Button.Label>
            </Button.Root>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        data-rounded="large"
                        ref={customizerRef}
                        initial={initialAnimation}
                        transition={{ type: 'spring', bounce: 0.1, duration: 0.4 }}
                        animate={animate}
                        exit={exitAnimation}
                        data-shade="glassy"
                        className="fixed inset-x-0 -bottom-px z-50 h-fit rounded-t-2xl border bg-white p-8 shadow-2xl shadow-gray-950/5 outline outline-1 outline-transparent md:rounded-card dark:feedback-bg md:right-[5.2rem] md:top-16 md:max-w-sm md:shadow-md lg:bottom-auto lg:left-auto dark:border-white/5 dark:shadow-gray-950/25 dark:outline-gray-950/50">
                        <div>
                            <Title size="base" weight="medium" as="div">
                                Personalize Your Theme
                            </Title>
                            <Text size="sm" className="mb-0 mt-0.5">
                                Tailor the theme to match your unique style
                            </Text>
                        </div>

                        <div className="mb-8 mt-6 space-y-6">
                            <div className="relative">
                                <div className={twMerge('absolute inset-[3px] w-1/2 rounded-[calc(var(--btn-radius)-3px)] border border-transparent bg-white shadow transition-transform duration-300 ease-in-out dark:border-white/5 dark:bg-[--ui-soft-bg]', theme == 'dark' && 'translate-x-[calc(100%-6px)]')}></div>
                                <RadioGroup.Root className="grid grid-cols-2 gap-0.5 rounded-[--btn-radius] border border-gray-950/5 bg-gray-950/5 p-0.5 dark:border-white/5 dark:bg-gray-950/50" defaultValue="dark" onValueChange={handleValueChange}>
                                    <RadioGroup.Item aria-label="Light theme" value="light" className={radioItem}>
                                        <Sun className="size-4" />
                                        <span className="text-sm">Light</span>
                                    </RadioGroup.Item>
                                    <RadioGroup.Item aria-label="Dark theme" value="dark" className={radioItem}>
                                        <Moon className="size-4" />
                                        <span className="text-sm">Dark</span>
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </div>
                            <div className="space-y-4">
                                <Title size="base" weight="normal" as="div" className="flex items-center gap-2.5 text-sm">
                                    <Palette className="size-4 opacity-50" />
                                    Palette
                                </Title>
                                <PaletteSwitcher global={global} />
                            </div>
                            <div className="space-y-4">
                                <Title size="base" weight="normal" as="div" className="flex items-center gap-2.5 text-sm">
                                    <Layers2 className="size-4 opacity-50" />
                                    Shade
                                </Title>
                                <ShadeSwitcher global={global} />
                            </div>
                            <div className="space-y-4">
                                <Title size="base" weight="normal" as="div" className="flex items-center gap-2.5 text-sm">
                                    <Square className="size-4 opacity-50" />
                                    Border Radius
                                </Title>
                                <RoundedSwitcher global={global} />
                            </div>
                        </div>

                        <div>
                            <CodeSnippet
                                className=" bg-gray-100/50 px-2 dark:border-white/5"
                                code={`<html 
    data-palette="${palette}"
    data-rounded="${rounded}"
    data-shade="${shade}"
>`}
                                lang="html"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
