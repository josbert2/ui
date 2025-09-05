import CodeSnippet from './utilities/CodeSnippet'
import type React from 'react'
import { useState, useRef, type ReactNode } from 'react'
import { Check, ChevronDown, Code2, Copy, Eye } from 'lucide-react'
import { Panel, PanelGroup, PanelResizeHandle, type ImperativePanelGroupHandle } from 'react-resizable-panels'
import Separator from '@tailus-ui/Separator'
import { TwitterLogoIcon } from '@radix-ui/react-icons'
import * as RadioGroup from '@radix-ui/react-radio-group'
import Button from '@tailus-ui/Button'
import { Caption, Title } from './tailus-ui/typography'
import Tooltip from '@tailus-ui/Tooltip'
import { useCopyToClipboard } from './Button/CodeCopyButton'
import { twMerge } from 'tailwind-merge'
import Select from './tailus-ui/Select'
import { AstroIcon, HTMLIcon, NextIcon, NuxtIcon } from './utilities/icons'
import { $stack, setStack } from '@store/stack'
import { useStore } from '@nanostores/react'
import type { Stack, Code } from './../types'
import { useMedia } from 'use-media'

export interface BlockPreviewProps {
    code: Code
    src: string
    title: string
    forHome?: boolean
}

const radioItem = 'rounded-[calc(var(--btn-radius)-2px)] duration-300 flex border border-transparent items-center justify-center h-7 px-2.5 gap-2 text-[--caption-text-color] transition-[color] hover:text-[--body-text-color] data-[state=checked]:text-[--title-text-color] data-[state=checked]:bg-white data-[state=checked]:shadow dark:data-[disabled]:bg-transparent dark:data-[state=checked]:shadow-gray-950/50 dark:data-[state=checked]:border-white/5 dark:data-[state=checked]:bg-[--ui-soft-bg]'

const DEFAULTSIZE = 100
const SMSIZE = 30
const MDSIZE = 62
const LGSIZE = 82

export const BlockPreview: React.FC<BlockPreviewProps> = ({ code, src, title, forHome }) => {
    const [width, setWidth] = useState(DEFAULTSIZE)
    const [mode, setMode] = useState<'preview' | 'code'>('preview')
    const stack = useStore($stack) || 'html'
    const { copied, copy } = useCopyToClipboard(code[stack])
    const ref = useRef<ImperativePanelGroupHandle>(null)
    const isLarge = useMedia('(min-width: 1024px)')

    return (
        <div className="group mb-32 border-b [--ui-border-color:theme(colors.gray.200/0.75)] dark:[--ui-border-color:theme(colors.gray.800/0.6)]">
            <div className="relative border-y">
                <div className="absolute inset-x-4 -top-14 bottom-0 mx-auto max-w-7xl lg:inset-x-0">
                    <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent to-[--ui-border-color] to-75% dark:to-[--ui-border-color]"></div>
                    <div className="absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b from-transparent to-[--ui-border-color] to-75% dark:to-[--ui-border-color]"></div>
                </div>
                <div className={twMerge('relative z-10 mx-auto flex max-w-7xl justify-between px-8 py-2', forHome && 'max-w-5xl border-x px-6')}>
                    <div className="flex items-center gap-3">
                        <Title as="h2" weight="normal" className="text-sm lg:w-24">
                            {title}
                        </Title>
                        {code && (
                            <>
                                <Separator fancy orientation="vertical" className="hidden h-4 lg:block" />
                                <RadioGroup.Root className="flex gap-0.5 rounded-[--btn-radius] border border-gray-950/5 bg-gray-950/5 p-0.5 dark:border-white/5 dark:bg-gray-950/50">
                                    <RadioGroup.Item onClick={() => setMode('preview')} aria-label="Block preview" value="100" checked={mode == 'preview'} className={radioItem}>
                                        <Eye className="size-4" />
                                        <span className="hidden text-sm md:block">Preview</span>
                                    </RadioGroup.Item>
                                    <RadioGroup.Item onClick={() => setMode('code')} aria-label="Code" value="0" checked={mode == 'code'} className={radioItem}>
                                        <Code2 className="size-4" />
                                        <span className="hidden text-sm md:block">Code</span>
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </>
                        )}

                        {mode == 'preview' && (
                            <>
                                <Separator fancy orientation="vertical" className="hidden h-4 lg:block" />
                                <Caption className="hidden lg:block">{width < MDSIZE ? 'Mobile' : width < LGSIZE ? 'Tablet' : 'Desktop'}</Caption>{' '}
                            </>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <Select.Root defaultValue={stack} value={stack} onValueChange={(value: Stack) => setStack(value)}>
                            <Select.Trigger variant="plain" size="sm" className="w-fit gap-2 data-[state=open]:bg-gray-950/5" aria-label="Change palette">
                                <Select.Value />
                                <Select.Icon className="opacity-50">
                                    <ChevronDown className="size-4" />
                                </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                                <Select.Content className="z-50 rounded-xl" sideOffset={4} position="popper" mixed intent="gray" variant="soft">
                                    <Select.Viewport>
                                        <SelectItem value="html" label="Html">
                                            <HTMLIcon className="h-4" />
                                        </SelectItem>
                                        <SelectItem value="astro" label="Astro">
                                            <AstroIcon className="h-4" />
                                        </SelectItem>
                                        <SelectItem value="nextjs" label="NextJs">
                                            <NextIcon className="h-4" />
                                        </SelectItem>
                                        <SelectItem disabled value="nuxtjs" label="NuxtJs">
                                            <NuxtIcon className="h-4" />
                                        </SelectItem>
                                    </Select.Viewport>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                        {code && (
                            <>
                                <Separator className="h-4" fancy orientation="vertical" />
                                <Tooltip.Provider delayDuration={200} skipDelayDuration={0}>
                                    <Tooltip.Root>
                                        <Tooltip.Trigger asChild>
                                            <Button.Root onClick={copy} size="sm" variant="ghost" intent="gray" aria-label="copy code">
                                                <Button.Icon size="xs" type="only">
                                                    {copied ? <Check /> : <Copy />}
                                                </Button.Icon>
                                            </Button.Root>
                                        </Tooltip.Trigger>
                                        <Tooltip.Content fancy className="z-10" inverted={false}>
                                            Copy block
                                        </Tooltip.Content>
                                    </Tooltip.Root>
                                </Tooltip.Provider>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-x-0 -bottom-14 mx-auto h-14 max-w-7xl">
                    <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-[--ui-border-color] dark:from-[--ui-border-color]"></div>
                    <div className="absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b from-[--ui-border-color] dark:from-[--ui-border-color]"></div>
                </div>
                <div className="relative z-10 mx-auto max-w-7xl px-4 lg:border-r lg:px-0">
                    <div className={twMerge('bg-white dark:bg-transparent', mode == 'code' && 'hidden')}>
                        <PanelGroup direction="horizontal" tagName="div" ref={ref}>
                            <Panel
                                onResize={(size) => {
                                    setWidth(Number(size))
                                }}
                                defaultSize={DEFAULTSIZE}
                                minSize={SMSIZE}
                                className="h-fit border-x ">
                                <iframe loading="lazy" title={title} className="block h-full min-h-[45rem] w-full" src={src} id={`block-${title}`} />
                            </Panel>
                            {isLarge && (
                                <>
                                    <PanelResizeHandle className="relative w-2 before:absolute before:inset-0 before:m-auto before:h-12 before:w-1 before:rounded-full before:bg-gray-300 before:transition-[height,background] hover:before:h-16 hover:before:bg-gray-400 focus:before:bg-gray-400 dark:before:bg-gray-600 dark:hover:before:bg-gray-500 dark:focus:before:bg-gray-400" />
                                    <Panel defaultSize={100 - DEFAULTSIZE} className="-mr-[0.5px] ml-px"></Panel>
                                </>
                            )}
                        </PanelGroup>
                    </div>
                    <div className={twMerge('bg-white  dark:bg-transparent', forHome && 'mx-auto border-x')}>{mode == 'code' && <CodeSnippet asUIBlock className={twMerge('rounded-none border-y-0 border-r-0 bg-white px-4 dark:bg-gray-925', forHome && 'mx-auto max-w-5xl border-r')} code={code[stack]} lang="tsx" />}</div>
                </div>
            </div>
        </div>
    )
}

export const SelectItem = ({ value, children, label, disabled }: { value: string; children: ReactNode; label: string; disabled?: boolean }) => {
    return (
        <Select.Item value={value} disabled={disabled} className="rounded-lg">
            <Select.ItemText>
                <div className="flex items-center gap-2">
                    {children}
                    <span className="hidden md:block">{label}</span>
                </div>
            </Select.ItemText>
            <Select.ItemIndicator>
                <Check className="size-3" />
            </Select.ItemIndicator>
        </Select.Item>
    )
}

export default BlockPreview
