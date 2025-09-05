import type { Code } from "src/types";

const htmlCode = `<section class="py-32">
    <div class="mx-auto max-w-3xl px-8 lg:px-0">
        <h1 class="text-title text-center text-4xl font-bold lg:text-6xl">Contact Sales</h1>
        <p class="text-body mt-4 text-center">We'll help you find the right plan and pricing for your business.</p>

        <form action="" class="bg-ui tls-shadow-md p-8 rounded-card mx-auto mt-12 max-w-lg shadow-gray-950/[0.03] sm:p-16">
            <div>
                <h3 class="text-title text-xl font-semibold">Let's get you to the right place</h3>
                <p class="mt-4 text-sm">Reach out to our sales team! We’re eager to learn more about how you plan to use our application.</p>
            </div>

            <div class="mt-12 space-y-6">
                <div class="field">
                    <label htmlFor="name" class="text-title text-sm">Full name</label>
                    <input type="text" required name="name" id="name" class="input sz-md variant-mixed" />
                </div>

                <div class="field">
                    <label htmlFor="email" class="text-title text-sm">Work Email</label>
                    <input type="email" required name="email" id="email" class="input sz-md variant-mixed" />
                </div>

                <div class="field">
                    <label htmlFor="country" class="text-title text-sm">Country/Region</label>
                    <div class="relative">
                        <svg class="text-body pointer-events-none absolute inset-y-0 right-2.5 my-auto opacity-75" xmlns="http://www.w3.org/2000/svg" width="0.75rem" height="0.75rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
                        <select id="country" name="country" class="input variant-mixed sz-md appearance-none">
                            <option value="1">DR Congo</option>
                            <option value="2">United States</option>
                            <option value="3">France</option>
                        </select>
                    </div>
                </div>

                <div class="field">
                    <label htmlFor="website" class="text-title text-sm">Company Website</label>
                    <input type="url" name="website" id="website" class="input sz-md variant-mixed" />
                    <span class="text-caption inline-block text-sm">Must start with 'https'</span>
                </div>

                <div class="field">
                    <label htmlFor="job" class="text-title text-sm">Job function</label>
                    <div class="relative">
                        <svg class="text-body pointer-events-none absolute inset-y-0 right-2.5 my-auto opacity-75" xmlns="http://www.w3.org/2000/svg" width="0.75rem" height="0.75rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
                        <select id="job" name="job" class="input variant-mixed sz-md appearance-none">
                            <option value="1">Finance</option>
                            <option value="2">Education</option>
                            <option value="3">Legal</option>
                            <option value="4">More</option>
                        </select>
                    </div>
                </div>

                <div class="field">
                    <label class="text-title text-sm" htmlFor="msg">Message</label>
                    <textarea class="textarea variant-mixed sz-md rounded-card" id="msg" rows="3"> </textarea>
                </div>

                <button class="btn variant-primary sz-sm ml-auto w-fit">Submit</button>
            </div>
        </form>
    </div>
</section>`

const nextjsCode = `import Link from 'next/link';

export default function ContactSection(){
    return (
        <section className="py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h1 className="text-title text-center text-4xl font-bold lg:text-6xl">Contact Sales</h1>
                <p className="text-body mt-4 text-center">We'll help you find the right plan and pricing for your business.</p>

                <form action="" className="bg-ui tls-shadow-md p-8 rounded-card mx-auto mt-12 max-w-lg shadow-gray-950/[0.03] sm:p-16">
                    <div>
                        <h3 className="text-title text-xl font-semibold">Let's get you to the right place</h3>
                        <p className="mt-4 text-sm">Reach out to our sales team! We’re eager to learn more about how you plan to use our application.</p>
                    </div>

                    <div className="mt-12 space-y-6">
                        <div className="field">
                            <label htmlFor="name" className="text-title text-sm">Full name</label>
                            <input type="text" required name="name" id="name" className="input sz-md variant-mixed" />
                        </div>

                        <div className="field">
                            <label htmlFor="email" className="text-title text-sm">Work Email</label>
                            <input type="email" required name="email" id="email" className="input sz-md variant-mixed" />
                        </div>

                        <div className="field">
                            <label htmlFor="country" className="text-title text-sm">Country/Region</label>
                            <div className="relative">
                                <svg className="text-body pointer-events-none absolute inset-y-0 right-2.5 my-auto opacity-75" xmlns="http://www.w3.org/2000/svg" width="0.75rem" height="0.75rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
                                <select id="country" name="country" className="input variant-mixed sz-md appearance-none">
                                    <option value="1">DR Congo</option>
                                    <option value="2">United States</option>
                                    <option value="3">France</option>
                                </select>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="website" className="text-title text-sm">Company Website</label>
                            <input type="url" name="website" id="website" className="input sz-md variant-mixed" />
                            <span className="text-caption inline-block text-sm">Must start with 'https'</span>
                        </div>

                        <div className="field">
                            <label htmlFor="job" className="text-title text-sm">Job function</label>
                            <div className="relative">
                                <svg className="text-body pointer-events-none absolute inset-y-0 right-2.5 my-auto opacity-75" xmlns="http://www.w3.org/2000/svg" width="0.75rem" height="0.75rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
                                <select id="job" name="job" className="input variant-mixed sz-md appearance-none">
                                    <option value="1">Finance</option>
                                    <option value="2">Education</option>
                                    <option value="3">Legal</option>
                                    <option value="4">More</option>
                                </select>
                            </div>
                        </div>

                        <div className="field">
                            <label className="text-title text-sm" htmlFor="msg">Message</label>
                            <textarea className="textarea variant-mixed sz-md rounded-card" id="msg" rows="3"> </textarea>
                        </div>

                        <button className="btn variant-primary sz-sm ml-auto w-fit">Submit</button>
                    </div>
                </form>
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