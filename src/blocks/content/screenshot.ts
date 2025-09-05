import type { Code } from "src/types";

const htmlCode = `<section class="overflow-hidden py-32">
    <div class="mx-auto max-w-5xl space-y-16 px-6">
        <h2 class="text-title relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">The Gemini ecosystem brings together our models.</h2>
        <div class="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div class="relative mb-6 sm:mb-0">
                <div class="absolute -inset-20 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px] sm:-inset-40"></div>
                <div class="absolute -inset-20 bg-gradient-to-b from-gray-50 via-transparent to-gray-50 sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>
                <div class="absolute -inset-20 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>

                <div class="tls-shadow-md rounded-card relative overflow-hidden shadow-gray-950/[0.03]">
                    <img class="relative dark:hidden" src="/blocks/ar.png" alt="" />
                    <img class="relative hidden grayscale dark:block" src="https://oxymor-st.tailus.io/_astro/bars.DEh8rxfi_2hxS64.webp" alt="" />
                </div>
            </div>
            <div class="relative space-y-4">
                <p class="text-body">Gemini is evolving to be more than just the models. <span class="text-title font-medium">It supports an entire ecosystem</span> — from products innovate.</p>
                <p>It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>

                <div class="pt-6">
                    <blockquote class="text-blockquote">
                        <p>Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.</p>

                        <div class="mt-6 space-y-3">
                            <cite class="text-title font-medium">John Doe, CEO</cite>
                            <img class="h-5 w-fit dark:invert" src="/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `export default function ContentSection(){
    return (
        <section className="overflow-hidden py-32">
            <div className="mx-auto max-w-5xl space-y-16 px-6">
                <h2 className="text-title relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">The Gemini ecosystem brings together our models.</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="absolute -inset-20 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px] sm:-inset-40"></div>
                        <div className="absolute -inset-20 bg-gradient-to-b from-gray-50 via-transparent to-gray-50 sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>
                        <div className="absolute -inset-20 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>

                        <div className="tls-shadow-md rounded-card relative overflow-hidden shadow-gray-950/[0.03]">
                            <img className="relative dark:hidden" src="/blocks/ar.png" alt="" />
                            <img className="relative hidden grayscale dark:block" src="https://oxymor-st.tailus.io/_astro/bars.DEh8rxfi_2hxS64.webp" alt="" />
                        </div>
                    </div>
                    <div className="relative space-y-4">
                        <p className="text-body">Gemini is evolving to be more than just the models. <span className="text-title font-medium">It supports an entire ecosystem</span> — from products innovate.</p>
                        <p>It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>

                        <div className="pt-6">
                            <blockquote className="text-blockquote">
                                <p>Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="text-title font-medium">John Doe, CEO</cite>
                                    <img className="h-5 w-fit dark:invert" src="/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}`

const nuxtjsCode = ``

export const screenshotCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}