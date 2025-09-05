import * as RadioGroup from '@radix-ui/react-radio-group'
import { useEffect, useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { container, item } from './animations'
import Select from '@tailus-ui/Select'
import setTheme from './set-theme'
import type { Palette } from './../../types'
import { useStore } from '@nanostores/react'
import { $palette, setPalette } from '@store/switchers'

const palettes = ['trust', 'oz', 'mystery', 'romance', 'passion', 'energy', 'spring', 'nature', 'winter']

export const PaletteSwitcher = ({global=true}:{global?:boolean}) => {
    const palette = useStore($palette)

    useEffect(() => {
        const root = document.querySelector('[data-palette]') as HTMLElement
        setTheme(root, 'palette', palette, global)
    }, [palette])

    const handleValueChange = (value: Palette) => {
        setPalette(value)
    }

    return (
        <motion.div variants={container}>
            <RadioGroup.Root aria-label="Theme palette" className="grid w-fit grid-cols-9 gap-3" defaultValue={palette} onValueChange={handleValueChange}>
                {palettes.map((palette, index) => (
                    <motion.div variants={item} key={index}>
                        <RadioGroup.Item value={palette} className="relative flex size-6 overflow-hidden rounded-full border border-gray-950/5 bg-primary-600 outline-2 outline-offset-2 outline-primary-600 focus-visible:outline dark:border-white/25" data-palette={palette}>
                            <RadioGroup.Indicator className="absolute inset-0 z-[1] m-auto size-2 rounded-full bg-white shadow-md shadow-gray-950/50" />
                            <div className="col-start-2 ml-auto h-full w-1/2 blur-[6px]">
                                <div className="h-1/2 bg-secondary-500"></div>
                                <div className="h-1/2 bg-accent-400"></div>
                            </div>
                        </RadioGroup.Item>
                    </motion.div>
                ))}
            </RadioGroup.Root>
        </motion.div>
    )
}

export const BlockPaletteSwitcher = ({ id }) => {
    const [palette, setPalette] = useState<Palette>('tls')

    const setTheme = (palette: Palette) => {
        const iframe = document.querySelector(`#${id}`) as HTMLIFrameElement
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
            if (iframeDoc) {
                iframeDoc.documentElement.setAttribute('data-palette', palette)
            }
        } catch (e) {
            console.error('Could not change theme in iframe:', e)
        }
    }

    useEffect(() => {
        setTheme(palette)
    }, [palette])

    const handleValueChange = (value: Palette) => {
        $palette.set(value)
        setPalette(value)
    }
    return (
        <Select.Root defaultValue="trust" onValueChange={handleValueChange}>
            <Select.Trigger variant="plain" size="sm" className="w-fit" aria-label="Change palette">
                <Select.Value />
                <Select.Icon className="opacity-50" />
            </Select.Trigger>
            <Select.Portal>
                <Select.Content sideOffset={4} position="popper" mixed data-shade="glassy" intent="gray" variant="soft">
                    <Select.Viewport>
                        <Select.Group>
                            <Select.Label>Palette</Select.Label>
                            {palettes.map((palette, index) => (
                                <SelectItem value={palette} key={index}>
                                    {palette}
                                </SelectItem>
                            ))}
                        </Select.Group>
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}

export const SelectItem = ({ value, children }: { value: string; children: ReactNode }) => {
    return (
        <Select.Item value={value}>
            <Select.ItemText>
                <div className="flex items-center gap-2 capitalize">
                    <div data-palette={value} className="grid size-4 grid-cols-2 overflow-hidden rounded-full border border-gray-950/10 bg-primary-600 dark:border-white/10">
                        <div className="col-start-2 ml-auto h-full w-1/2 blur-[4px]">
                            <div className="h-1/2 bg-secondary-500"></div>
                            <div className="h-1/2 bg-accent-400"></div>
                        </div>
                    </div>
                    {children}
                </div>
            </Select.ItemText>
            <Select.ItemIndicator />
        </Select.Item>
    )
}
