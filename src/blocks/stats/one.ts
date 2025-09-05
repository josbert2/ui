import type { Code } from "src/types";

const htmlCode = `<section class="py-20">
    <div class="mx-auto max-w-5xl space-y-16 px-6">
        <div class="relative z-10 mx-auto max-w-xl space-y-6 text-center">
            <h2 class="text-title text-4xl font-medium lg:text-5xl">Tailus UI in numbers</h2>
            <p class="text-body">Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
        </div>

        <div class="grid gap-12 divide-y md:divide-y-0 md:divide-x *:text-center md:grid-cols-3 md:gap-2">
            <div class="space-y-4">
                <div class="text-title text-5xl font-bold">+1200</div>
                <p class="text-body">Stars on GitHub</p>
            </div>
            <div class="space-y-4">
                <div class="text-title text-5xl font-bold">22 Million</div>
                <p class="text-body">Active Users</p>
            </div>
            <div class="space-y-4">
                <div class="text-title text-5xl font-bold">+500</div>
                <p class="text-body">Powered Apps</p>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `export default function StatsSection(){
    return (
        <section className="py-20">
            <div className="mx-auto max-w-5xl space-y-16 px-6">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-title text-4xl font-medium lg:text-5xl">Tailus UI in numbers</h2>
                    <p className="text-body">Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>

                <div className="grid gap-12 divide-y md:divide-y-0 md:divide-x *:text-center md:grid-cols-3 md:gap-2">
                    <div className="space-y-4">
                        <div className="text-title text-5xl font-bold">+1200</div>
                        <p className="text-body">Stars on GitHub</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-title text-5xl font-bold">22 Million</div>
                        <p className="text-body">Active Users</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-title text-5xl font-bold">+500</div>
                        <p className="text-body">Powered Apps</p>
                    </div>
                </div>
            </div>
        </section>
    )
}`

const nuxtjsCode = ``

export const oneCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}