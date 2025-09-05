import { MotionValue, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, type ButtonHTMLAttributes } from 'react'
import Tooltip from '@tailus-ui/Tooltip'
import { HTMLIcon, ReactIcon } from './utilities/icons'
import Separator from './tailus-ui/Separator'
import { SITE_SOCIAL_GITHUB, SITE_SOCIAL_TWITTER } from 'src/const'
import { setIsOpen } from '@store/customizer'
import useDarkMode from '@hooks/useDarkMode'
import { useMedia } from 'use-media'

export function SiteHeader() {
    let mouseX = useMotionValue(Infinity)
    const [darkMode, toggleDarkMode] = useDarkMode()
    const isLarge = useMedia({ minWidth: '640px' })

    return (
        <motion.div onMouseMove={(e) => mouseX.set(e.pageX)} onMouseLeave={() => mouseX.set(Infinity)} className="fixed inset-x-0 bottom-4 z-[51] mx-auto flex h-[3.55rem] w-fit items-end gap-2.5 rounded-[calc(var(--btn-radius)+6px)] border border-white/10 bg-white px-1.5 pb-1.5 shadow-md shadow-gray-950/5 ring-1 ring-gray-200 backdrop-blur-2xl dark:border-gray-500/25 dark:bg-gray-900/50 dark:shadow-gray-950/35 dark:ring-gray-950">
            <AppIcon mouseX={mouseX} tooltip="Home" href="/">
                <svg className="relative size-full text-gray-950 transition group-active:scale-90 dark:text-white" width="32" height="32" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M84 42C84 65.196 65.196 84 42 84C18.804 84 0 65.196 0 42C0 18.804 18.804 0 42 0C65.196 0 84 18.804 84 42ZM9.48201 42C9.48201 59.9592 24.0408 74.518 42 74.518C59.9592 74.518 74.518 59.9592 74.518 42C74.518 24.0408 59.9592 9.48199 42 9.48199C24.0408 9.48199 9.48201 24.0408 9.48201 42ZM48.3697 26.2316C51.2872 26.2316 53.6523 28.5967 53.6523 31.5142C53.6523 34.4317 51.2872 36.7968 48.3697 36.7968C45.4522 36.7968 43.0871 34.4317 43.0871 31.5142C43.0871 28.5967 45.4522 26.2316 48.3697 26.2316ZM42.2543 36.7543C42.3875 36.7543 42.5195 36.7593 42.6502 36.769C43.691 37.9013 45.0637 38.7237 46.6141 39.0819C47.1736 39.9162 47.5 40.92 47.5 42C47.5 44.8971 45.1514 47.2457 42.2543 47.2457C39.3572 47.2457 37.0087 44.8971 37.0087 42C37.0087 39.1029 39.3572 36.7543 42.2543 36.7543ZM34.8047 39.7898C34.5971 40.4904 34.4857 41.2322 34.4857 42C34.4857 42.7679 34.5971 43.5097 34.8047 44.2102C33.969 46.0163 32.1408 47.2693 30.02 47.2693C27.1098 47.2693 24.7507 44.9102 24.7507 42C24.7507 39.0899 27.1098 36.7308 30.02 36.7308C32.1408 36.7308 33.969 37.9837 34.8047 39.7898ZM53.6445 52.4859C53.6445 49.5733 51.2834 47.2122 48.3708 47.2122C48.246 47.2122 48.1221 47.2165 47.9994 47.225C46.9472 48.3816 45.5507 49.2193 43.9718 49.5761C43.4191 50.4101 43.0971 51.4104 43.0971 52.4859C43.0971 55.3984 45.4583 57.7595 48.3708 57.7595C51.2834 57.7595 53.6445 55.3984 53.6445 52.4859ZM59.7461 42C59.7461 39.0938 57.3901 36.7378 54.4838 36.7378C54.3567 36.7378 54.2306 36.7423 54.1057 36.7512C53.0573 37.8988 51.6691 38.7307 50.1003 39.0877C49.9504 39.3129 49.8173 39.5503 49.703 39.7982C49.909 40.4962 50.0195 41.2352 50.0195 42C50.0195 42.7648 49.909 43.5038 49.703 44.2019C49.8173 44.4497 49.9504 44.6872 50.1003 44.9124C51.6691 45.2694 53.0573 46.1013 54.1057 47.2489C54.2306 47.2578 54.3567 47.2623 54.4838 47.2623C57.3901 47.2623 59.7461 44.9063 59.7461 42ZM40.9219 50.2755C40.7143 50.9761 40.6028 51.718 40.6028 52.4859C40.6028 53.2538 40.7143 53.9957 40.9219 54.6962C40.0861 56.503 38.2573 57.7564 36.1358 57.7564C33.225 57.7564 30.8653 55.3967 30.8653 52.4859C30.8653 51.4099 31.1877 50.4093 31.7411 49.5753C33.317 49.2184 34.7111 48.3823 35.7621 47.2284C35.8855 47.2197 36.0102 47.2153 36.1358 47.2153C36.2612 47.2153 36.3856 47.2197 36.5088 47.2283C37.56 48.3825 38.9544 49.2187 40.5306 49.5755C40.678 49.7976 40.809 50.0315 40.9219 50.2755ZM40.5094 34.4263C40.6608 34.1992 40.795 33.9595 40.9102 33.7094C40.705 33.0126 40.595 32.2752 40.595 31.5121C40.595 30.7489 40.705 30.0114 40.9102 29.3147C40.0777 27.5058 38.2492 26.25 36.1274 26.25C33.2213 26.25 30.8654 28.6059 30.8654 31.5121C30.8654 32.5894 31.1892 33.5912 31.7448 34.4254C33.3117 34.7828 34.6983 35.614 35.7457 36.7604C35.8718 36.7695 35.9991 36.7741 36.1274 36.7741C36.1921 36.7741 36.2564 36.7729 36.3204 36.7706C36.385 36.7683 36.4493 36.7648 36.5132 36.7602C37.5596 35.615 38.9445 34.7843 40.5094 34.4263Z"
                        fill="currentColor"></path>
                </svg>
            </AppIcon>
            <Separator className="h-6 -translate-y-2.5" fancy orientation="vertical" />
            <AppIcon mouseX={mouseX} tooltip="React UI Kit" href="https://ui.tailus.io">
                <ReactIcon className="relative size-full" />
            </AppIcon>
            <AppIcon mouseX={mouseX} tooltip="Html UI Kit" href="/get-started/installation" isActive>
                <HTMLIcon className="relative size-full" />
            </AppIcon>
            <AppIcon mouseX={mouseX} tooltip="Templates" href="https://tailus.io/templates">
                <svg className="relative size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path fill="#bbdefb" d="M4 7h40v34H4z" />
                    <path fill="#3f51b5" d="M9 12h30v5H9z" />
                    <path fill="#2196f3" d="M9 21h13v16H9zm17 0h13v16H26z" />
                </svg>
            </AppIcon>
            <Separator className="h-6 -translate-y-2.5" fancy orientation="vertical" />
            {isLarge && (
                <AppIcon mouseX={mouseX} tooltip="Code Source" href={SITE_SOCIAL_GITHUB}>
                    <svg className="relative size-full text-gray-950 transition group-active:scale-90 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                        <g fill="currentColor">
                            <path d="M208 104v8a48 48 0 0 1-48 48h-24a32 32 0 0 1 32 32v40h-64v-40a32 32 0 0 1 32-32h-24a48 48 0 0 1-48-48v-8a49.28 49.28 0 0 1 8.51-27.3A51.92 51.92 0 0 1 76 32a52 52 0 0 1 43.83 24h32.34A52 52 0 0 1 196 32a51.92 51.92 0 0 1 3.49 44.7A49.28 49.28 0 0 1 208 104" opacity={0.2}></path>
                            <path d="M208.3 75.68A59.74 59.74 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58 58 0 0 0-7.7-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.81 43.81 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.81 43.81 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.76 41.76 0 0 1 7 22.52Z"></path>
                        </g>
                    </svg>
                </AppIcon>
            )}
            <AppIcon mouseX={mouseX} tooltip="Follow on X" href={SITE_SOCIAL_TWITTER}>
                <svg className="relative size-full text-gray-950 transition group-active:scale-90 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"></path>
                </svg>
            </AppIcon>
            <Separator className="h-6 -translate-y-2.5" fancy orientation="vertical" />
            {isLarge && (
                <AppIcon onClick={setIsOpen} mouseX={mouseX} role="button" tooltip="Customize">
                    <svg className="relative size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5 18.08V19h.92l9.06-9.06l-.92-.92z" opacity="0.3" />
                        <path fill="currentColor" d="M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06l.92.92z" />
                    </svg>
                </AppIcon>
            )}

            <AppIcon mouseX={mouseX} onClick={toggleDarkMode} role="button" tooltip="Toggle Theme">
                <svg className="absolute inset-0 m-auto size-full -rotate-180 scale-[2] p-2 text-white opacity-0 transition duration-500 will-change-transform group-active:scale-90 dark:rotate-0 dark:scale-100 dark:opacity-100" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                    <g fill="currentColor">
                        <path d="M184 128a56 56 0 1 1-56-56a56 56 0 0 1 56 56" opacity=".2" />
                        <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16" />
                    </g>
                </svg>
                <svg aria-hidden="true" className="relative size-full scale-100 p-0.5 text-gray-950 transition duration-500 will-change-transform group-active:scale-90 dark:rotate-90 dark:scale-0 dark:opacity-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                    <path
                        className="text-gray-500"
                        d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
                    />
                </svg>
            </AppIcon>
        </motion.div>
    )
}

interface AppIconProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    mouseX: MotionValue
    children: React.ReactNode
    tooltip: string
    href?: string
    isActive?: boolean
}

const iconClasses =
    'aspect-square shadow border border-gray-950/10 relative before:rounded-btn before:inset-0 dark:before:opacity-0 before:absolute before:inset-t before:border-t before:border-white shadow-gray-950/5 bg-gray-100 rounded-btn group p-2.5 flex relative dark:bg-gray-800 dark:border-0 dark:border-t dark:border-white/10 hover:brightness-105 dark:hover:brightness-125 data-[state=active]:after:absolute data-[state=active]:after:-bottom-2 data-[state=active]:after:opacity-50 data-[state=active]:after:inset-x-0 data-[state=active]:after:size-1 data-[state=active]:after:rounded-full  data-[state=active]:after:bg-[--title-text-color] data-[state=active]:after:mx-auto'

const AppIcon: React.FC<AppIconProps> = ({ mouseX, tooltip, href, children, isActive, ...props }) => {
    const isLarge = useMedia({ minWidth: '1024px' })
    const widths = isLarge ? [43, 80, 43] : [43, 43, 43]
    let ref = useRef<HTMLDivElement>(null)

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

        return val - bounds.x - bounds.width / 2
    })

    let widthSync = useTransform(distance, [-200, 0, 200], widths)
    let width = useSpring(widthSync, { mass: 0.05, stiffness: 60, damping: 4 })

    return (
        <Tooltip.Provider>
            <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                    {href ? (
                        <motion.a data-state={isActive && 'active'} ref={ref} href={href} style={{ width, height: width }} {...props} className={iconClasses}>
                            {children}
                        </motion.a>
                    ) : (
                        <motion.button ref={ref} style={{ width, height: width }} {...props} className={iconClasses}>
                            {children}
                        </motion.button>
                    )}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content sideOffset={8} fancy inverted={false} className="z-50">
                        {tooltip}
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}
