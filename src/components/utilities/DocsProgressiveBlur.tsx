import type { ReactNode } from 'react'
import { BlurDiv } from './BlurDiv'

export const BlurDivs = () => (
    <div className="relative h-full w-full">
        <BlurDiv zIndex={1} blurValue={0.25} gradientStops="rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%" />
        <BlurDiv zIndex={2} blurValue={0.5} gradientStops="rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%" />
        <BlurDiv zIndex={3} blurValue={0.75} gradientStops="rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%" />
        <BlurDiv zIndex={4} blurValue={1} gradientStops="rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%" />
        <BlurDiv zIndex={5} blurValue={1.25} gradientStops="rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%" />
        <BlurDiv zIndex={6} blurValue={1.5} gradientStops="rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%" />
        <BlurDiv zIndex={7} blurValue={2} gradientStops="rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%" />
        <BlurDiv zIndex={8} blurValue={2.5} gradientStops="rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%" />
        <BlurDiv zIndex={9} blurValue={3} gradientStops="rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%" />
    </div>
)

export const ProgressiveBlur = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className="fixed bottom-0 mt-auto flex h-[calc(100vh-5.75rem)] w-screen items-center justify-center overflow-auto lg:h-[calc(100vh-4rem)]">
                <div className="absolute h-full w-full overflow-auto">{children}</div>
                <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-16 w-full lg:left-72 xl:left-80">
                    <BlurDivs />
                </div>
            </div>
        </>
    )
}
