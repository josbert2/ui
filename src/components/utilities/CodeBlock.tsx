import * as Tabs from '@radix-ui/react-tabs'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-shell-session'
import 'prismjs/components/prism-xml-doc'
import 'prismjs/plugins/line-highlight/prism-line-highlight'
import '@styles/code-line-highlight.css'
import '@styles/code-theme.css'
import { useEffect, useState, useRef } from 'react'
import type { FileType } from './File'
import File from './File'
import CodeCopyButton from '../Button/CodeCopyButton'
import { twMerge } from 'tailwind-merge'
import ScrollArea from '@tailus-ui/ScrollArea'
import SeparatorRoot from '@tailus-ui/Separator'

export type CodeBlock = {
    code: string
    lang: string
    filename: string
    highlightedLines?: string
    highlightStart?: string
}[]

interface CodeBlockProps extends React.HTMLAttributes<HTMLModElement> {
    codeBlocks: CodeBlock
    asUIBlock?: boolean
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ className, codeBlocks, asUIBlock }) => {
    const [state, setState] = useState(codeBlocks[0].filename)
    const spanRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        Prism.highlightAll()
        const activeTrigger = document.getElementById(state) as HTMLElement | null
        if (spanRef.current && activeTrigger) {
            spanRef.current.style.left = activeTrigger.offsetLeft + 'px'
            spanRef.current.style.width = activeTrigger.offsetWidth + 'px'
        }
    }, [state, codeBlocks])

    return (
        <div className={twMerge('group/snippet relative h-full w-full overflow-hidden rounded-[--card-radius] border bg-gray-200 dark:bg-transparent', asUIBlock && 'dark:shadow dark:shadow-gray-950', className)}>
            <Tabs.Root className="size-full" defaultValue={state} onValueChange={(value) => setState(value as string)}>
                <ScrollArea.Root type="scroll" className="h-10 rounded-t-[calc(var(--card-radius)-1px)] border-x border-t border-transparent bg-gray-200 pt-0.5 [grid-template-columns:1fr_auto] dark:border-gray-925 dark:bg-transparent">
                    <ScrollArea.Viewport className="h-full w-full overflow-clip">
                        <Tabs.List className={twMerge('relative flex h-8 w-fit items-center overflow-hidden pb-px')}>
                            {codeBlocks &&
                                codeBlocks.map((codeBlock, index) => (
                                    <>
                                        <Tabs.Trigger key={index} className={twMerge('group relative z-[1] flex h-full items-center gap-2 px-2.5 text-[--caption-text-color] transition-[color,transform] duration-300 will-change-transform first:ml-1.5 hover:text-[--body-text-color] data-[state=active]:text-[--title-text-color]')} value={codeBlock.filename} id={codeBlock.filename}>
                                            <File file={codeBlock.lang as FileType} className="h-3.5 w-3.5" />
                                            <span className="w-max text-xs text-gray-600 hover:text-gray-950 group-data-[state=active]:text-gray-950 dark:text-gray-400 dark:hover:text-white dark:group-data-[state=active]:text-white">{codeBlock.filename}</span>
                                        </Tabs.Trigger>
                                        <SeparatorRoot orientation="vertical" fancy className="h-1/2 border-gray-300" />
                                    </>
                                ))}
                            <span className="hiden absolute inset-y-0 mt-auto size-fit h-full rounded-t-[--card-radius] bg-white transition-[width,left] duration-300 ease-in-out will-change-auto dark:bg-gray-925" ref={spanRef}>
                                <div className="absolute -left-2 bottom-0 size-2 bg-white before:absolute before:inset-0 before:rounded-br-full before:bg-gray-200 dark:bg-gray-925 dark:before:bg-[#1E1F1F]"></div>
                                <div className="absolute -right-2 bottom-0 size-2 bg-white before:absolute before:inset-0 before:rounded-bl-full before:bg-gray-200 dark:bg-gray-925 dark:before:bg-[#1E1F1F]"></div>
                            </span>
                        </Tabs.List>
                    </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar orientation="horizontal" className="data-[orientation=horizontal]:h-0.5" />
                </ScrollArea.Root>
                <CodeCopyButton code={codeBlocks.find((codeBlock) => codeBlock.filename === state)?.code || ''} size="sm" className="invisible absolute right-1 top-10 z-10 scale-75 opacity-0 transition-all duration-200 group-hover/snippet:visible group-hover/snippet:scale-100 group-hover/snippet:opacity-100" />
                {codeBlocks.map((codeBlock, index) => (
                    <Tabs.Content className="relative -mt-[5px] h-full bg-white text-sm shadow-md dark:bg-gray-925" key={index} value={codeBlock.filename}>
                        <ScrollArea.Root className={twMerge('max-h-[calc(20rem-37px)]', asUIBlock && 'h-full max-h-[calc(45rem-37px)]')} type="scroll">
                            <ScrollArea.Viewport className="w-full">
                                <pre data-line={codeBlock.highlightedLines} data-start={codeBlock.highlightStart} className={`h-max w-full px-4 pb-4 pt-1 text-sm`}>
                                    <code className={`language-${codeBlock.lang} font-mono text-sm`}>{codeBlock.code}</code>
                                </pre>
                            </ScrollArea.Viewport>
                            <ScrollArea.Scrollbar orientation="horizontal" />
                            <ScrollArea.Scrollbar orientation="vertical" />
                        </ScrollArea.Root>
                    </Tabs.Content>
                ))}
            </Tabs.Root>
        </div>
    )
}

export default CodeBlock
