import Prism from 'prismjs'
import '@styles/code-line-numbers.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import '@styles/code-theme.css'
import { useEffect, useRef } from 'react'
import { CssIcon, TailwindIcon } from './utilities/icons'
import { LightDarkParticles } from './utilities/Particles'

export default function FeaturesBento() {
    const containerRef = useRef<HTMLDivElement>(null)
    const indicatorRef = useRef<HTMLDivElement>(null)
    const cardLeftRef = useRef<HTMLDivElement>(null)
    const cardRightRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        Prism.highlightAll()
    })

    useEffect(() => {
        const setClipPercentage = (percentage: number) => {
            cardLeftRef.current && cardLeftRef.current.style.setProperty('--clip-percentage', `${100 - percentage}%`)
            cardRightRef.current && cardRightRef.current.style.setProperty('--clip-percentage', `${percentage}%`)
            if (indicatorRef.current) {
                indicatorRef.current.style.left = `${percentage}%`
            }
        }

        setClipPercentage(50)

        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                const mouseX = e.clientX - rect.left
                const containerWidth = rect.width

                const clipPercentage = (mouseX / containerWidth) * 100
                setClipPercentage(clipPercentage)
            }
        }

        const container = containerRef.current
        container?.addEventListener('mousemove', handleMouseMove)

        return () => {
            container?.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    return (
        <div className="relative grid gap-4 pb-6 lg:grid-cols-2 lg:grid-rows-2">
            <div className="space-y-4 lg:row-span-2">
                <div className="card bg-ui tls-shadow row-span-2 space-y-6 shadow-gray-950/5 ">
                    <div className="relative mt-[--card-padding]">
                        <div className="absolute inset-0 z-[1] mt-auto h-1/4 bg-gradient-to-t from-[--ui-bg]"></div>
                        <div className="absolute inset-y-0 left-1 my-auto h-2/5 w-px bg-gradient-to-b from-transparent via-[--ui-border-color] to-transparent"></div>
                        <div className="absolute inset-y-0 left-5 my-auto h-3/5 w-px bg-gradient-to-b from-transparent via-[--ui-border-color] to-transparent"></div>
                        <div className="absolute inset-y-0 right-1 my-auto h-2/5 w-px bg-gradient-to-b from-transparent via-[--ui-border-color] to-transparent"></div>
                        <div className="absolute inset-y-0 right-5 my-auto h-3/5 w-px bg-gradient-to-b from-transparent via-[--ui-border-color] to-transparent"></div>
                        <div className="mx-auto w-64 rounded-t-[--btn-radius] border-x border-t sm:w-full sm:max-w-sm">
                            <div className="border-b px-5 py-2">
                                <div className="flex items-center gap-2.5">
                                    <CssIcon className="h-4" />
                                    <span className="text-sm tracking-tight">tailus.css</span>
                                </div>
                            </div>
                            <div>
                                <pre className="line-numbers h-max w-full px-4 text-sm">
                                    <code className="language-css font-mono">
                                        {`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    :root {
        /* Border Radius */
        --card-radius: theme(borderRadius.xl);
        --btn-radius: var(--card-radius);
        --badge-radius: var(--btn-radius);
        --input-radius: var(--btn-radius);
        --avatar-radius: theme(borderRadius.full);
        --annonce-radius: var(--avatar-radius);`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-title text-lg font-medium">No Node, Just CSS</h3>
                        <p className="mt-4 max-w-sm text-sm">No need for extra packages—simply drop in the CSS file and start building. It’s that easy and lightweight.</p>
                    </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="card bg-ui tls-shadow flex flex-col justify-between overflow-hidden shadow-gray-950/5 ">
                        <div className="p-4">
                            <p className="text-center text-lg">
                                Perfectly works with <span className="text-title font-semibold">TailwindCss</span> Utilities.
                            </p>
                        </div>
                        <div className="relative -mb-[--card-padding]">
                            <div className="absolute -inset-4 aspect-square rounded-t-full bg-gradient-to-b from-accent-600 to-primary-900 blur-xl"></div>
                            <div className="absolute -inset-y-0 inset-x-2 aspect-square rounded-t-full bg-gradient-to-b from-white blur-md"></div>
                            <div className="absolute inset-0">
                                <LightDarkParticles id="tw" />
                            </div>
                            <div className="relative mx-auto size-fit rounded-t-lg border-x border-t border-gray-950/5 shadow-xl shadow-gray-950 dark:border-white/35">
                                <div className=" mx-auto size-fit rounded-t-[7px] bg-gradient-to-b from-gray-400 to-gray-950 pt-px">
                                    <div className="relative mx-auto flex size-32 items-center justify-center rounded-t-md border-x border-white/10 bg-gradient-to-b from-gray-800 to-gray-950/95 shadow shadow-gray-950/5 dark:shadow-gray-950">
                                        <TailwindIcon className="h-12 w-12 text-gray-500 mix-blend-screen" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-ui tls-shadow group relative grid overflow-hidden shadow-gray-950/5  [grid-template-rows:1fr_auto]">
                        <div className=" p-4">
                            <div className="relative flex items-center justify-center overflow-x-auto border bg-white py-2 lg:overflow-visible dark:border-info-400/20 dark:bg-gray-950/25">
                                <div className="absolute -inset-1 flex justify-between">
                                    <div className="flex flex-col justify-between">
                                        <div className="size-2 rounded-full border border-info-500 bg-white"></div>
                                        <div className="size-2 rounded-full border border-info-500 bg-white"></div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div className="size-2 rounded-full border border-info-500 bg-white"></div>
                                        <div className="size-2 rounded-full border border-info-500 bg-white"></div>
                                    </div>
                                </div>
                                <div className="relative mx-auto grid size-full max-w-xs grid-cols-4 gap-3 px-4 py-2 *:aspect-square *:overflow-hidden *:rounded-full *:border *:border-gray-950/5 dark:*:border-white/5">
                                    <div data-palette="trust" className="row-span-2  hidden grid-cols-2 bg-primary-600">
                                        <div className="col-start-2 bg-secondary-500 blur"></div>
                                        <div className="col-start-2 bg-accent-400 blur"></div>
                                    </div>
                                    <div data-palette="oz" className="row-span-2 grid grid-cols-2 bg-primary-600">
                                        <div className="col-start-2 bg-secondary-500 blur"></div>
                                        <div className="col-start-2 bg-accent-400 blur"></div>
                                    </div>
                                    <div data-palette="mystery" className="row-span-2 grid grid-cols-2 bg-primary-600">
                                        <div className="col-start-2 bg-secondary-500 blur"></div>
                                        <div className="col-start-2 bg-accent-400 blur"></div>
                                    </div>
                                    <div data-palette="romance" className="row-span-2 grid grid-cols-2 bg-primary-600">
                                        <div className="col-start-2 bg-secondary-500 blur"></div>
                                        <div className="col-start-2 bg-accent-400 blur"></div>
                                    </div>
                                    <div data-palette="passion" className="row-span-2 grid grid-cols-2 bg-primary-600">
                                        <div className="col-start-2 bg-secondary-500 blur"></div>
                                        <div className="col-start-2 bg-accent-400 blur"></div>
                                    </div>
                                    <div data-palette="energy" className="row-span-2 grid grid-cols-2 bg-primary-600">
                                        <div className="col-start-2 bg-secondary-500 blur"></div>
                                        <div className="col-start-2 bg-accent-400 blur"></div>
                                    </div>
                                    <div data-palette="spring" className="row-span-2 grid grid-cols-2 bg-primary-600">
                                        <div className="col-start-2 bg-secondary-500 blur"></div>
                                        <div className="col-start-2 bg-accent-400 blur"></div>
                                    </div>
                                    <div data-palette="nature" className="row-span-2 grid grid-cols-2 bg-primary-600">
                                        <div className="col-start-2 bg-secondary-500 blur"></div>
                                        <div className="col-start-2 bg-accent-400 blur"></div>
                                    </div>
                                    <div data-palette="winter" className="row-span-2 grid grid-cols-2 bg-primary-600">
                                        <div className="col-start-2 bg-secondary-500 blur"></div>
                                        <div className="col-start-2 bg-accent-400 blur"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-lg">
                                Kickstart with pre-built color <span className="text-title font-medium">palettes</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card bg-ui tls-shadow group shadow-gray-950/5 ">
                <div ref={containerRef} className="overflow-hidden border border-dashed p-4">
                    <div className="relative">
                        <div ref={indicatorRef} className="absolute -inset-y-4 left-[--clip-percentage] z-10 w-0.5 rounded-full bg-gradient-to-b from-transparent via-white to-transparent">
                            <div className="absolute inset-y-4 -left-6 w-12 rounded-[100%] bg-gradient-to-r from-transparent via-primary-600/75 to-transparent blur-md"></div>
                            <div className="absolute -inset-x-14 inset-y-4 z-10">
                                <LightDarkParticles id="light-dark" />
                            </div>
                        </div>

                        <div ref={cardLeftRef} className="card  variant-mixed ml-auto flex h-full flex-col justify-between !border-gray-200 !bg-white  [clip-path:inset(0px_var(--clip-percentage)_0px_0px)]">
                            <div className="divide-y divide-dashed divide-gray-200 border-l border-gray-200">
                                <div className="py-2">
                                    <div className="flex h-8 w-2/3 items-center rounded-r-[--btn-radius] border border-l-0 border-gray-200 bg-white pl-2 text-xs text-gray-600">Jan 2022</div>
                                </div>
                                <div className="py-2">
                                    <div className="flex h-8 w-4/5 items-center rounded-r-[--btn-radius] border border-l-0 border-white/5 bg-primary-600 bg-gradient-to-l from-white/15 to-transparent pl-2 text-xs text-white">Jun 2022</div>
                                </div>
                                <div className="py-2">
                                    <div className="flex h-8 w-1/2 items-center rounded-r-[--btn-radius] border border-l-0 border-gray-200 bg-white pl-2 text-xs text-gray-600">Aug 2022</div>
                                </div>
                            </div>
                        </div>
                        <div ref={cardRightRef} className="card variant-mixed absolute inset-0 ml-auto flex h-full flex-col justify-between !border-gray-800 !bg-gray-950 !shadow-lg  [clip-path:inset(0px_0px_0px_var(--clip-percentage))]">
                            <div className="divide-y divide-dashed divide-gray-800 border-l border-gray-800">
                                <div className="py-2">
                                    <div className="flex h-8 w-2/3 items-center rounded-r-[--btn-radius] border border-l-0 border-gray-700 bg-gray-800 pl-2 text-xs text-gray-400">Jan 2022</div>
                                </div>
                                <div className="py-2">
                                    <div className="flex h-8 w-4/5 items-center rounded-r-[--btn-radius] border border-l-0 border-white/5 bg-gray-900 bg-gradient-to-l from-primary-600 to-transparent pl-2 text-xs text-white">Jun 2022</div>
                                </div>
                                <div className="py-2">
                                    <div className="flex h-8 w-1/2 items-center rounded-r-[--btn-radius] border border-l-0 border-gray-700 bg-gray-800 pl-2 text-xs text-gray-400">Aug 2022</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-title text-lg font-medium">Flexible Theme Modes</h3>
                    <p className="mt-4 max-w-sm text-sm">Choose from light, dark, or a combined mode with our 3 ready-to-use CSS files.</p>
                </div>
            </div>
            <div className="card bg-ui tls-shadow grid shadow-gray-950/5  [grid-template-rows:1fr_auto]">
                <div className="relative p-4">
                    <div className="absolute inset-4 z-[1] mt-auto h-1/2 bg-gradient-to-t from-[--ui-bg]"></div>
                    <div data-shade="800" className="grid h-full rounded-t-md border [grid-template-rows:auto_1fr]">
                        <div className="flex h-7 items-center gap-1.5 border-b px-3">
                            <div className="size-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                            <div className="size-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                            <div className="size-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>

                            <span className="text-placeholder ml-2 block text-xs">Trust</span>
                        </div>
                        <div className="flex border-b">
                            <div className="w-1/5 border-r"></div>
                            <div className="flex w-4/5">
                                <div className="mx-auto mt-auto h-3/4 w-2/3 rounded-t border-x border-t bg-primary-600/10 pl-2.5 pt-1 duration-300 group-hover:bg-primary-600/30">
                                    <span className="text-xs text-primary-800 dark:text-primary-100">Oz</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-fit p-4">
                    <h3 className="text-title text-lg font-medium">Data Attributes</h3>
                    <p className="mt-4 max-w-sm text-sm">Use custom data attributes to personalize your entire site or specific components effortlessly.</p>
                </div>
            </div>
        </div>
    )
}
