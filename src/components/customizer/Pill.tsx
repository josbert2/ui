import { Card } from '@tailus-ui/Card'
import { PaletteSwitcher } from './PaletteSwitcher'
import { RoundedSwitcher } from './RoundedSwitcher'
import { ShadeSwitcher } from './ShadeSwitcher'
import CodeSnippet from '@components/utilities/CodeSnippet'
import * as Tabs from '@radix-ui/react-tabs'
import { Layers2, Minus, Palette, Square, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { $palette, $rounded, $shade } from '@store/switchers'
import { motion, AnimatePresence } from 'framer-motion'
import { Title, Text } from '@tailus-ui/typography'
import Button from '@tailus-ui/Button'
import { useStore } from '@nanostores/react'
import { isOpen, setIsOpen } from '@store/customizer'
import SeparatorRoot from '@components/tailus-ui/Separator'

export type TabsAppProps = 'palette' | 'shade' | 'rounded'

export const CustomizerPill = () => {
    const palette = useStore($palette)
    const rounded = useStore($rounded)
    const shade = useStore($shade)

    const [state, setState] = useState<TabsAppProps>('palette')
    const $isOpen = useStore(isOpen)
    const spanRef = useRef<HTMLSpanElement>(null)

    const [spanLeft, setSpanLeft] = useState(0)
    const [spanWidth, setSpanWidth] = useState(0)

    useEffect(() => {
        const activeTrigger = document.getElementById(state!) as HTMLElement
        if (activeTrigger) {
            setSpanLeft(activeTrigger.offsetLeft)
            setSpanWidth(activeTrigger.offsetWidth)
        }
    }, [state])

    return (
        <AnimatePresence>
            {$isOpen && (
                <motion.div
                    key="pill"
                    layout
                    data-shade="950"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                    animate={{ height: '322px', opacity: 1 }}
                    initial={{ height: '0px', opacity: 0 }}
                    exit={{ height: '0px', opacity: 0 }}
                    className="fixed inset-x-4 bottom-20 z-50 mx-auto w-full max-w-[29rem] overflow-hidden rounded-[calc(var(--card-radius)+6px)] border bg-white shadow-md shadow-gray-950/5 backdrop-blur-2xl dark:border-gray-500/25 dark:bg-gray-900/50 dark:ring-[0.75px] dark:ring-gray-950">
                    <div className="p-6">
                        <Button.Root size="xs" variant="soft" intent="gray" className="absolute right-1 top-1 size-5 rounded-full" onClick={setIsOpen}>
                            <Button.Icon type="only" className="size-3">
                                <X />
                            </Button.Icon>
                        </Button.Root>
                        <Title as="div" size="base" weight="medium">
                            Customize the theme
                        </Title>
                        <Text as="p" size="sm" className="mb-4 mt-1">
                            Make it entirely yours
                        </Text>

                        <Tabs.Root defaultValue={state} onValueChange={(value) => setState(value as TabsAppProps)} className="text-[--title-text-color]" data-shade="800">
                            <Tabs.List className="relative -mx-3.5 mb-5 flex h-9 p-1 ">
                                <motion.span
                                    animate={{
                                        left: spanLeft,
                                        width: spanWidth,
                                        transition: { type: 'spring', bounce: 0.2, duration: 0.5 },
                                    }}
                                    className="absolute inset-y-1 -z-[1] block rounded-full border border-gray-950/5 bg-gray-100 dark:border-white/5 dark:bg-gray-500/25"
                                    ref={spanRef}
                                />
                                <Tabs.Trigger value="palette" id="palette" className="flex h-full items-center gap-2 px-2.5 text-sm duration-200 data-[state=inactive]:opacity-50">
                                    <Palette className="size-4" />
                                    <span>Palette</span>
                                </Tabs.Trigger>
                                <Tabs.Trigger value="shade" id="shade" className="flex h-full items-center gap-2 px-2.5 text-sm duration-200 data-[state=inactive]:opacity-50">
                                    <Layers2 className="size-4" />
                                    <span>Shade</span>
                                </Tabs.Trigger>
                                <Tabs.Trigger value="rounded" id="rounded" className="flex h-full items-center gap-2 px-2.5 text-sm duration-200 data-[state=inactive]:opacity-50">
                                    <Square className="size-4" />
                                    <span>Rounded</span>
                                </Tabs.Trigger>
                            </Tabs.List>
                            <Tabs.Content value="palette">
                                <PaletteSwitcher />
                            </Tabs.Content>
                            <Tabs.Content value="shade">
                                <ShadeSwitcher />
                            </Tabs.Content>
                            <Tabs.Content value="rounded">
                                <RoundedSwitcher />
                            </Tabs.Content>
                        </Tabs.Root>
                    </div>
                    <SeparatorRoot className="dark:bg-gray-500/25" />
                    <CodeSnippet
                        className="w-full rounded-none border-none bg-none px-2 dark:bg-transparent dark:backdrop-blur-none"
                        code={`<html 
    data-palette="${palette}"
    data-shade="${shade}"
    data-rounded="${rounded}"
>`}
                        lang="html"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
