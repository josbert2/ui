import type { Code } from "src/types";

const htmlCode = `<section class="py-32">
    <div class="mx-auto max-w-5xl px-6">
        <div class="mx-auto max-w-2xl space-y-6 text-center">
            <h2 class="text-title text-center text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h2>
            <p class="text-body">Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
        </div>

        <div class="mt-20 grid gap-6 md:grid-cols-3 dark:[--ui-soft-bg:var(--ui-bg)]">
            <div class="card bg-ui tls-shadow-md flex flex-col justify-between space-y-8 shadow-gray-950/[0.03]">
                <div class="space-y-4">
                    <div>
                        <h2 class="text-title font-medium">Free</h2>
                        <span class="text-title my-3 block text-2xl font-semibold">$0 / mo</span>
                        <p class="text-sm">Per editor</p>
                    </div>
                    <hr class="border-dashed" />
                    <ul class="list-outside list-image-[url(/dark-check.svg)] space-y-3 pl-4 text-sm *:pl-2 dark:list-image-[url(/check.svg)]">
                        <li>Basic Analytics Dashboard</li>
                        <li>5GB Cloud Storage</li>
                        <li>Email and Chat Support</li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <hr class="border-dashed" />
                    <a href="" class="btn variant-outlined sz-sm">
                        <span class="btn-label"> Get Started</span>
                    </a>
                </div>
            </div>

            <div class="card bg-ui tls-shadow-md relative shadow-gray-950/[0.03] [--ui-border-color:theme(colors.primary.600)] dark:shadow-primary-950/25">
                <span class="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-gradient-to-br from-purple-400 to-primary-600 px-3 py-1 text-xs font-medium text-white shadow-md">Popular</span>
                <div class="flex flex-col justify-between space-y-8 [--ui-border-color:var(--input-border)]">
                    <div class="space-y-4">
                        <div>
                            <h2 class="text-title font-medium">Pro</h2>
                            <span class="text-title my-3 block text-2xl font-semibold">$19 / mo</span>
                            <p class="text-sm">Per editor</p>
                        </div>
                        <hr class="border-dashed" />
                        <ul class="text-title list-outside list-image-[url(/dark-check.svg)] space-y-3 pl-5 text-sm *:pl-2 dark:list-image-[url(/check.svg)]">
                            <li>Basic Analytics Dashboard</li>
                            <li>5GB Cloud Storage</li>
                            <li>Email and Chat Support</li>
                            <li>Access to Community Forum</li>
                            <li>Single User Access</li>
                            <li>Access to Basic Templates</li>
                            <li>Mobile App Access</li>
                            <li>1 Custom Report Per Month</li>
                            <li>Monthly Product Updates</li>
                            <li>Standard Security Features</li>
                        </ul>
                    </div>
                    <div class="space-y-4">
                        <hr class="border-dashed" />
                        <a href="" class="btn variant-primary sz-sm">
                            <span class="btn-label"> Get Started</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="card bg-ui tls-shadow-md flex flex-col justify-between space-y-8 shadow-gray-950/[0.03]">
                <div class="space-y-4">
                    <div>
                        <h2 class="text-title font-medium">Startup</h2>
                        <span class="text-title my-3 block text-2xl font-semibold">$29 / mo</span>
                        <p class="text-sm">Per editor</p>
                    </div>
                    <hr class="border-dashed" />
                    <ul class="list-outside list-image-[url(/dark-check.svg)] space-y-3 pl-4 text-sm *:pl-2 dark:list-image-[url(/check.svg)]">
                        <li>Everything in Basic Plan</li>
                        <li>5GB Cloud Storage</li>
                        <li>Email and Chat Support</li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <hr class="border-dashed" />
                    <a href="" class="btn variant-outlined sz-sm">
                        <span class="btn-label"> Get Started</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `import Link from 'next/link';

export default function Pricing(){
    return (
        <section className="py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-title text-center text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h2>
                    <p className="text-body">Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>

                <div className="mt-20 grid gap-6 md:grid-cols-3 dark:[--ui-soft-bg:var(--ui-bg)]">
                    <div className="card bg-ui tls-shadow-md flex flex-col justify-between space-y-8 shadow-gray-950/[0.03]">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-title font-medium">Free</h2>
                                <span className="text-title my-3 block text-2xl font-semibold">$0 / mo</span>
                                <p className="text-sm">Per editor</p>
                            </div>
                            <hr className="border-dashed" />
                            <ul className="list-outside list-image-[url(/dark-check.svg)] space-y-3 pl-4 text-sm *:pl-2 dark:list-image-[url(/check.svg)]">
                                <li>Basic Analytics Dashboard</li>
                                <li>5GB Cloud Storage</li>
                                <li>Email and Chat Support</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <hr className="border-dashed" />
                            <Link href="" className="btn variant-outlined sz-sm">
                                <span className="btn-label"> Get Started</span>
                            </Link>
                        </div>
                    </div>

                    <div className="card bg-ui tls-shadow-md relative shadow-gray-950/[0.03] [--ui-border-color:theme(colors.primary.600)] dark:shadow-primary-950/25">
                        <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-gradient-to-br from-purple-400 to-primary-600 px-3 py-1 text-xs font-medium text-white shadow-md">Popular</span>
                        <div className="flex flex-col justify-between space-y-8 [--ui-border-color:var(--input-border)]">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-title font-medium">Pro</h2>
                                    <span className="text-title my-3 block text-2xl font-semibold">$19 / mo</span>
                                    <p className="text-sm">Per editor</p>
                                </div>
                                <hr className="border-dashed" />
                                <ul className="text-title list-outside list-image-[url(/dark-check.svg)] space-y-3 pl-5 text-sm *:pl-2 dark:list-image-[url(/check.svg)]">
                                    <li>Basic Analytics Dashboard</li>
                                    <li>5GB Cloud Storage</li>
                                    <li>Email and Chat Support</li>
                                    <li>Access to Community Forum</li>
                                    <li>Single User Access</li>
                                    <li>Access to Basic Templates</li>
                                    <li>Mobile App Access</li>
                                    <li>1 Custom Report Per Month</li>
                                    <li>Monthly Product Updates</li>
                                    <li>Standard Security Features</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <hr className="border-dashed" />
                                <Link href="" className="btn variant-primary sz-sm">
                                    <span className="btn-label"> Get Started</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-ui tls-shadow-md flex flex-col justify-between space-y-8 shadow-gray-950/[0.03]">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-title font-medium">Startup</h2>
                                <span className="text-title my-3 block text-2xl font-semibold">$29 / mo</span>
                                <p className="text-sm">Per editor</p>
                            </div>
                            <hr className="border-dashed" />
                            <ul className="list-outside list-image-[url(/dark-check.svg)] space-y-3 pl-4 text-sm *:pl-2 dark:list-image-[url(/check.svg)]">
                                <li>Everything in Basic Plan</li>
                                <li>5GB Cloud Storage</li>
                                <li>Email and Chat Support</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <hr className="border-dashed" />
                            <Link href="" className="btn variant-outlined sz-sm">
                                <span className="btn-label"> Get Started</span>
                            </Link>
                        </div>
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