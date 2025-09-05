import * as RadioGroup from '@radix-ui/react-radio-group'
import { useEffect, useState, type ReactNode } from 'react'
import { $rounded, setRounded } from '@store/switchers'
import { useStore } from '@nanostores/react'
import { motion } from 'framer-motion'
import { container, item } from './animations'
import Select from '@tailus-ui/Select'
import setTheme from './set-theme'
import type { Rounded } from './../../types'

const roundeds = ['none', 'small', 'default', 'medium', 'large', 'xlarge', '2xlarge', '3xlarge', 'full']

export const RoundedSwitcher = ({ global }: { global?: boolean }) => {
    const rounded = useStore($rounded) || 'large'

    useEffect(() => {
        const root = document.querySelector('[data-rounded]') as HTMLElement
        setTheme(root, 'rounded', rounded, global)
    }, [rounded])

    const handleValueChange = (value: Rounded) => {
        setRounded(value)
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
            <RadioGroup.Root aria-label="Theme roundeds" className="grid w-fit grid-cols-9 gap-3" defaultValue={rounded} onValueChange={handleValueChange}>
                {roundeds.map((rounded, index) => (
                    <motion.div key={index}>
                        <RadioGroup.Item data-tls-shade="900" value={rounded} className="relative flex size-6 overflow-hidden rounded-[--btn-radius] border border-gray-300 bg-[--ui-soft-bg] outline-2 outline-offset-2 outline-primary-600 dark:feedback-bg focus-visible:outline dark:border-white/15" data-rounded={rounded}>
                            <RadioGroup.Indicator className="absolute inset-0 z-[1] m-auto size-2 rounded-full bg-gray-950 shadow-md shadow-gray-950/25 dark:bg-white dark:shadow-gray-950/50" />
                        </RadioGroup.Item>
                    </motion.div>
                ))}
            </RadioGroup.Root>
        </motion.div>
    )
}

export const BlockRoundedSwitcher = ({ id }) => {
    const [rounded, setRounded] = useState<Rounded>('xlarge')

    const setTheme = (rounded: Rounded) => {
        const iframe = document.querySelector(`#${id}`) as HTMLIFrameElement
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
            if (iframeDoc) {
                iframeDoc.documentElement.setAttribute('data-rounded', rounded)
            }
        } catch (e) {
            console.error('Could not change theme in iframe:', e)
        }
    }

    useEffect(() => {
        setTheme(rounded)
    }, [rounded])

    const handleValueChange = (value: Rounded) => {
        $rounded.set(value)
        setRounded(value)
    }
    return (
        <Select.Root defaultValue="xlarge" onValueChange={handleValueChange}>
            <Select.Trigger variant="plain" size="sm" className="w-fit" aria-label="Change border radius">
                <Select.Value />
                <Select.Icon className="opacity-50" />
            </Select.Trigger>
            <Select.Portal>
                <Select.Content mixed data-shade="glassy" sideOffset={4} position="popper" intent="gray" variant="soft">
                    <Select.Viewport>
                        <Select.Group>
                            <Select.Label>Rounded</Select.Label>
                            {roundeds.map((rounded, index) => (
                                <SelectItem value={rounded} key={index}>
                                    {rounded}
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
                    <div data-rounded={value} className="size-4 overflow-hidden rounded-[--card-radius] border border-gray-300 dark:border-gray-700" />

                    {children}
                </div>
            </Select.ItemText>
            <Select.ItemIndicator />
        </Select.Item>
    )
}
