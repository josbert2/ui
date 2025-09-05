import * as RadioGroup from '@radix-ui/react-radio-group'
import { useEffect, useState, type ReactNode } from 'react'
import { $shade, setShade } from '@store/switchers'
import { useStore } from '@nanostores/react'
import { container, item } from './animations'
import { motion } from 'framer-motion'
import Select from '@tailus-ui/Select'
import setTheme from './set-theme'
import type { Shade } from './../../types'

const shades = ['glassy', '800', '900', '925', '950']

export const ShadeSwitcher = ({ global }: { global?: boolean }) => {
    const shade = useStore($shade) || '900'

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('[data-shade]')) as HTMLElement[]

        elements.forEach((element) => setTheme(element, 'shade', shade, global))

        if (shade == '950' || shade == '925') {
            document.querySelector('#site-bg')?.classList.replace('dark:from-gray-925', 'dark:from-gray-950')
        } else {
            document.querySelector('#site-bg')?.classList.replace('dark:from-gray-950', 'dark:from-gray-925')
        }
    }, [shade])

    const handleValueChange = (value: Shade) => {
        setShade(value)
    }
    return (
        <motion.div
            variants={container}
            initial="hidden"
            transition={{
                duration: 0.2,
                staggerChildren: 0.01,
                bounce: 0.1,
            }}>
            <RadioGroup.Root aria-label="Theme shades" className="grid w-fit grid-cols-5 gap-3" defaultValue={shade} onValueChange={handleValueChange}>
                {shades.map((shade, index) => (
                    <motion.div key={index}>
                        <RadioGroup.Item value={shade} className="relative flex size-6 overflow-hidden rounded-full border bg-[--ui-soft-bg] outline-2 outline-offset-2 outline-primary-600 dark:feedback-bg focus-visible:outline dark:border-white/15" data-tls-shade={shade}>
                            <RadioGroup.Indicator className="absolute inset-0 z-[1] m-auto size-2 rounded-full bg-gray-950 shadow-md shadow-gray-950/50 dark:bg-white" />
                        </RadioGroup.Item>
                    </motion.div>
                ))}
            </RadioGroup.Root>
        </motion.div>
    )
}

export const BlockShadeSwitcher = ({ id }) => {
    const [shade, setShade] = useState<Shade>('900')

    const setTheme = (shade: Shade) => {
        const iframe = document.querySelector(`#${id}`) as HTMLIFrameElement
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
            const components = iframeDoc?.querySelectorAll('[data-shade]')
            if (iframeDoc) {
                iframeDoc.documentElement.setAttribute('data-shade', shade)
                components?.forEach((component) => {
                    component.setAttribute('data-shade', shade)
                })
            }
        } catch (e) {
            console.error('Could not change theme in iframe:', e)
        }
    }

    useEffect(() => {
        setTheme(shade)
    }, [shade])

    const handleValueChange = (value: Shade) => {
        $shade.set(value)
        setShade(value)
    }
    return (
        <Select.Root defaultValue="900" onValueChange={handleValueChange}>
            <Select.Trigger variant="plain" className="w-fit" size="sm" aria-label="Change theme shade">
                <Select.Value />
                <Select.Icon className="opacity-50" />
            </Select.Trigger>
            <Select.Portal>
                <Select.Content data-shade="glassy" sideOffset={4} position="popper" mixed intent="gray" variant="soft">
                    <Select.Viewport>
                        <Select.Group>
                            <Select.Label>Shade</Select.Label>
                            {shades.map((shade, index) => (
                                <SelectItem value={shade} key={index}>
                                    {shade}
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
                    <div data-shade={value} className="feedback-bg size-4 overflow-hidden rounded-[--card-radius] border" />
                    {children}
                </div>
            </Select.ItemText>
            <Select.ItemIndicator />
        </Select.Item>
    )
}
