import Prism from 'prismjs'
import '@styles/code-line-numbers.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import { useEffect, useRef, useState } from 'react'
import '@styles/code-theme.css'
import { twMerge } from 'tailwind-merge'
import { motion, useSpring, useTransform } from 'framer-motion'

type Current = 'tailus' | 'tailwind'

const codes = {
    tailus: `
<form action="" class="card variant-mixed w-max max-w-lg p-1">
    <div class="p-8">
      <div class="text-center">
        <img class="mx-auto size-8" src="/logo.svg" />
        <h3 class="text-title mb-1 mt-6 text-xl font-semibold">Sign In to Tailus UI</h3>
        <p class="text-sm">Welcome back! Sign in to continue</p>
      </div>

      <div class="mt-6">
        <button class="btn sz-md variant-outlined w-full">
          <GoogleIcon />
          Continue With Google
        </button>
      </div>

      <div class="mb-4 mt-6 grid items-center gap-3 [grid-template-columns:1fr_auto_1fr]">
        <span class="separator"></span>
        <span class="text-caption text-sm">Or</span>
        <span class="separator"></span>
      </div>

      <div class="space-y-6">
        <div class="field">
          <label for="email2" class="text-title text-sm">Username</label>
          <input class="input sz-md variant-mixed" type="email" required name="email2" id="email2" />
        </div>

        <div class="field">
          <div class="flex justify-between">
            <label for="pwd" class="text-title text-sm">Password</label>
            <a href="#" class="link intent-info variant-ghost text-sm">Forgot your Password ?</a>
          </div>
          <input class="input sz-md variant-mixed" type="password" required name="pwd" id="pwd" />
        </div>

        <button class="btn variant-primary sz-md w-full">Sign In</button>
      </div>
    </div>

    <div data-shade="925" class="card variant-soft rounded-[calc(var(--card-radius)-4px)] dark:!bg-[--ui-bg]">
      <p class="text-center text-sm">Don't have an account ?<a href="#" class="link intent-neutral variant-underlined">Create account</a></p>
    </div>
</form>`,
    tailwind: `
<form action="" class="relative mx-auto w-max max-w-xl rounded-3xl border border-gray-200 bg-white p-1 dark:border-gray-800 dark:bg-gray-900">
    <div class="p-8">
      <div class="text-center">
        <img class="mx-auto size-8" src="/logo.svg" />
        <h3 class="mb-1 mt-6 text-xl font-semibold text-gray-950 dark:text-white">Sign In to Tailus UI</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Welcome back! Sign in to continue</p>
      </div>

      <div class="mt-6">
        <button class="outline-blue-600 transtion-[filter] group flex h-8 w-full items-center justify-center gap-1.5 rounded-md bg-gray-50 px-3.5 text-sm font-medium text-gray-800 outline-2 outline-offset-2 duration-150 ease-in-out [--btn-border-color:theme(colors.gray.200)] [--inner-border-color:1] [--outline-radial-opacity:0.6] [background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,var(--outline-radial-opacity))_0%,transparent_100%)] [box-shadow:rgba(255,255,255,var(--inner-border-color))_0px_1px_0px_0px_inset,var(--btn-border-color)_0px_0px_0px_1px,0px_1px_2px_rgba(0,0,0,0.1)] hover:brightness-[0.98] focus-visible:outline active:brightness-100 disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none disabled:hover:brightness-100 dark:bg-gray-500/5 dark:text-gray-300 dark:[--btn-border-color:theme(colors.gray.500/0.3)] dark:[--inner-border-color:0] dark:[--outline-radial-opacity:0.2] dark:[background-image:none] dark:hover:bg-gray-500/10 dark:active:bg-gray-500/5 dark:disabled:border-none dark:disabled:bg-gray-500/10 dark:disabled:text-gray-700 dark:disabled:shadow-none dark:disabled:[background-image:none]">
          <GoogleIcon />
          Continue With Google
        </button>
      </div>

      <div class="mb-4 mt-6 grid items-center gap-3 [grid-template-columns:1fr_auto_1fr]">
        <span class="bg-gray-200 dark:bg-gray-800 block h-px"></span>
        <span class="text-sm text-gray-500">Or</span>
        <span class="bg-gray-200 dark:bg-gray-800 block h-px"></span>
      </div>

      <div class="space-y-6">
        <div class="space-y-3 has-[:disabled]:opacity-50">
          <label for="email2" class="text-sm text-gray-950 dark:text-white">Username</label>
          <input class="h-9 w-full rounded-md border bg-white px-3 text-gray-950 placeholder-gray-400 shadow outline-2 outline-blue-600 invalid:border-red-600 focus:outline focus:invalid:outline-red-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-600" type="email" required name="email2" id="email2" />
        </div>

        <div class="space-y-3 has-[:disabled]:opacity-50">
          <div class="flex justify-between">
            <label for="pwd" class="text-sm text-gray-950 dark:text-white">Password</label>
            <a href="#" class="text-sm text-blue-600 underline dark:text-blue-400">Forgot your Password ?</a>
          </div>
          <input class="h-9 w-full rounded-md border bg-white px-3 text-gray-950 placeholder-gray-400 shadow outline-2 outline-blue-600 invalid:border-red-600 focus:outline focus:invalid:outline-red-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-600" type="password" required name="pwd" id="pwd" />
        </div>

        <button class="flex justify-center gap-1.5 items-center rounded-md outline-2 outline-offset-2 focus-visible:outline outline-blue-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none disabled:hover:brightness-100 dark:disabled:bg-gray-500/10 dark:disabled:[background-image:none] dark:disabled:text-gray-700 dark:disabled:shadow-none dark:disabled:border-none bg-gradient-to-b [box-shadow:rgba(255,255,255,0.25)_0px_1px_0px_0px_inset,var(--btn-border-color)_0px_0px_0px_1px] text-white hover:brightness-[1.1] transition-[filter] duration-150 ease-in-out active:brightness-95 dark:shadow-inner dark:to-0% dark:border-t dark:shadow-white/10 disabled:from-gray-100 disabled:to-gray-100 from-blue-500 to-blue-600 [--btn-border-color:theme(colors.blue.700)] dark:border-blue-400/75 text-base h-9 px-4 w-full">Sign In</button>
      </div>
    </div>

    <div data-shade="925" class="rounded-2xl bg-gray-100 p-6 dark:bg-gray-950">
      <p class="text-center text-sm text-gray-600 dark:text-gray-400">Don't have an account ? <a href="#" class="underlined text-gray-950 dark:text-white">Create account</a></p>
    </div>
</form>`,
}

const TAILWINDCOUNT = 114
const TAILUSCOUNT = 43

export default function CodeComparason() {
    const [activeCode, setActiveCode] = useState<Current>('tailwind')
    const [indicatorWidth, setIndicatorWidth] = useState(0)
    const [indicatorLeft, setIndicatorLeft] = useState(0)

    const [classesCount, setClassesCount] = useState(TAILWINDCOUNT)

    let spring = useSpring(classesCount, { mass: 0.8, stiffness: 75, damping: 15 })
    let display = useTransform(spring, (current) => Math.round(current).toLocaleString())

    const tailus = useRef<HTMLButtonElement>(null)
    const tailwind = useRef<HTMLButtonElement>(null)

    const handleTabClick = (code: Current, count: number) => {
        setActiveCode(code)
        setClassesCount(count)
    }

    useEffect(() => {
        Prism.highlightAll()
    })

    useEffect(() => {
        spring.set(classesCount)
    }, [spring, classesCount])

    useEffect(() => {
        const codes = { tailus, tailwind }

        if (codes[activeCode].current) {
            setIndicatorWidth(codes[activeCode].current.offsetWidth)
            setIndicatorLeft(codes[activeCode].current.offsetLeft)
        }
    }, [activeCode])

    return (
        <div className="relative border-r [grid-template-columns:auto_1fr] md:grid">
            <div className="relative -mr-2 md:max-w-md lg:max-w-2xl">
                <div className="absolute inset-x-0 bottom-0 right-0 z-10 h-1/3 bg-gradient-to-t from-gray-100 dark:from-gray-950"></div>
                <div className=" h-fit border ">
                    <div className="bg-ui flex h-10 items-center justify-between overflow-hidden border-b pr-8 dark:bg-transparent">
                        <div data-shade="950" className="relative h-full">
                            <div
                                className={twMerge('bg-ui-soft absolute inset-y-0 border border-[--ui-bg] duration-300 will-change-auto', activeCode == 'tailus' ? '[--active-bg:theme(colors.primary.500)]' : '[--active-bg:theme(colors.cyan.500)]')}
                                style={{
                                    width: `${indicatorWidth}px`,
                                    left: indicatorLeft,
                                }}></div>
                            <div className="relative flex h-full items-center border-r *:h-full *:px-5">
                                <button ref={tailwind} data-state={activeCode == 'tailwind' && 'active'} className="text-body data-[state=active]:text-title text-sm" onClick={() => handleTabClick('tailwind', TAILWINDCOUNT)}>
                                    TailwindCss
                                </button>
                                <span className="relative z-[1] block h-full w-px bg-[--ui-border-color] !px-0"></span>
                                <button ref={tailus} data-state={activeCode == 'tailus' && 'active'} onClick={() => handleTabClick('tailus', TAILUSCOUNT)} className="text-body  data-[state=active]:text-title text-sm">
                                    Tailus UI Html
                                </button>
                            </div>
                        </div>
                        <span className="text-caption text-sm">
                            <motion.span className="text-title">{display}</motion.span> Classes
                        </span>
                    </div>
                    <div data-pagefind-ignore className="relative w-full overflow-hidden bg-gray-50 dark:bg-transparent">
                        <pre className="line-numbers max-h-[32rem] w-full px-4 text-sm">
                            <code className="language-html font-mono text-sm">{codes[activeCode]}</code>
                        </pre>
                    </div>
                </div>
            </div>
            <div className="relative z-10 -mt-16 border-t md:mt-0">
                <div className="relative ml-2 h-4 bg-[repeating-linear-gradient(-45deg,var(--stripes-color),var(--stripes-color)_0.5px,bg-transparent_0.5px,bg-transparent_6px)] [--stripes-color:theme(colors.gray.300)] before:absolute before:inset-0 before:bg-gradient-to-t before:from-gray-50 dark:[--stripes-color:theme(colors.white/0.2)] dark:before:from-gray-950"></div>
                <form action="" className="bg-ui tls-shadow-lg relative -mb-4 -mr-2 overflow-hidden rounded-[--card-radius] p-1 shadow-gray-950/5">
                    <div className="-mx-1 flex h-9 items-center gap-1.5 px-4">
                        <div className="size-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                        <div className="size-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                        <div className="size-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                    <div className="p-8 lg:p-12">
                        <div className="-mt-6 text-center">
                            <img className="mx-auto size-9 dark:invert" src="/favicon.svg" alt="Tailus UI Logo" loading="lazy" width={36} height={36} />
                            <h3 className="text-title mb-1 mt-6 text-xl font-semibold">Sign In to Tailus UI</h3>
                            <p className="text-sm">Welcome back! Sign in to continue</p>
                        </div>

                        <div className="mt-4">
                            <button className="btn sz-sm variant-outlined w-full gap-3.5 font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 262">
                                    <path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                                    <path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                                    <path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path>
                                    <path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                                </svg>
                                <span className="btn-label">Continue With Google</span>
                            </button>
                        </div>

                        <hr className="my-4 border-dashed" />
                        <div className="mb-6 space-y-4">
                            <div className="field">
                                <label htmlFor="email2" className="text-title text-sm">
                                    Username
                                </label>
                                <input type="email" required name="email2" id="email2" className="input sz-md variant-mixed !outline-primary-600" />
                            </div>

                            <div className="field">
                                <label htmlFor="pwd" className="text-title text-sm">
                                    Password
                                </label>
                                <input type="password" required name="pwd" id="pwd" className="input sz-md variant-mixed !outline-primary-600" />
                            </div>
                        </div>
                        <button className="btn variant-primary sz-md w-full">Sign In</button>
                    </div>

                    <div className="card variant-soft rounded-[calc(var(--card-radius)-4px)] dark:!bg-gray-950/50">
                        <p className="text-center text-sm">
                            Don't have an account ?{' '}
                            <a href="#" className="link intent-neutral variant-underlined">
                                Create account
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
