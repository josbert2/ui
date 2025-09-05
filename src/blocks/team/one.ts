import type { Code } from "src/types";

const htmlCode = `<section class="py-32">
    <div class="mx-auto max-w-3xl px-8 lg:px-0">
        <h2 class="text-title mb-16 text-4xl font-bold lg:text-5xl">Our team</h2>

        <div>
            <h3 class="text-title mb-6 text-lg font-medium">Leadership</h3>
            <div data-rounded="full" class="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                <div>
                    <div class="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                    </div>
                    <span class="text-title mt-2 block text-sm">Méschac Irung</span>
                    <span class="text-caption block text-xs">Creator</span>
                </div>

                <div>
                    <div class="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/68236786?v=4" alt="Théo Balick" height="460" width="460" loading="lazy" />
                    </div>
                    <span class="text-title mt-2 block text-sm">Théo Balick</span>
                    <span class="text-caption block text-xs">Frontend Dev</span>
                </div>

                <div>
                    <div class="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/99137927?v=4" alt="Glodie Lukose" height="460" width="460" loading="lazy" />
                    </div>
                    <span class="text-title mt-2 block text-sm">Glodie Lukose</span>
                    <span class="text-caption block text-xs">Frontend Dev</span>
                </div>

                <div>
                    <div class="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/31113941?v=4" alt="Bernard Ngandu" height="460" width="460" loading="lazy" />
                    </div>
                    <span class="text-title mt-2 block text-sm">Bernard Ngandu</span>
                    <span class="text-caption block text-xs">Backend Dev</span>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <h3 class="text-title mb-6 text-lg font-medium">Engineering</h3>
            <div data-rounded="full" class="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                <div>
                    <div class="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                    </div>
                    <span class="text-title mt-2 block text-sm">Méschac Irung</span>
                    <span class="text-caption block text-xs">Creator</span>
                </div>

                <div>
                    <div class="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/68236786?v=4" alt="Théo Balick" height="460" width="460" loading="lazy" />
                    </div>
                    <span class="text-title mt-2 block text-sm">Théo Balick</span>
                    <span class="text-caption block text-xs">Frontend Dev</span>
                </div>

                <div>
                    <div class="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/99137927?v=4" alt="Glodie Lukose" height="460" width="460" loading="lazy" />
                    </div>
                    <span class="text-title mt-2 block text-sm">Glodie Lukose</span>
                    <span class="text-caption block text-xs">Frontend Dev</span>
                </div>

                <div>
                    <div class="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/31113941?v=4" alt="Bernard Ngandu" height="460" width="460" loading="lazy" />
                    </div>
                    <span class="text-title mt-2 block text-sm">Bernard Ngandu</span>
                    <span class="text-caption block text-xs">Backend Dev</span>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <h3 class="text-title mb-6 text-lg font-medium">Marketing</h3>
            <div data-rounded="full" class="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                <div>
                    <div class="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                    </div>
                    <span class="text-title mt-2 block text-sm">Méschac Irung</span>
                    <span class="text-caption block text-xs">Creator</span>
                </div>

                <div>
                    <div class="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/68236786?v=4" alt="Théo Balick" height="460" width="460" loading="lazy" />
                    </div>
                    <span class="text-title mt-2 block text-sm">Théo Balick</span>
                    <span class="text-caption block text-xs">Frontend Dev</span>
                </div>

                <div>
                    <div class="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/99137927?v=4" alt="Glodie Lukose" height="460" width="460" loading="lazy" />
                    </div>
                    <span class="text-title mt-2 block text-sm">Glodie Lukose</span>
                    <span class="text-caption block text-xs">Frontend Dev</span>
                </div>

                <div>
                    <div class="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/31113941?v=4" alt="Bernard Ngandu" height="460" width="460" loading="lazy" />
                    </div>
                    <span class="text-title mt-2 block text-sm">Bernard Ngandu</span>
                    <span class="text-caption block text-xs">Backend Dev</span>
                </div>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `export default function TeamSection(){
    return (
        <section className="py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="text-title mb-16 text-4xl font-bold lg:text-5xl">Our team</h2>

                <div>
                    <h3 className="text-title mb-6 text-lg font-medium">Leadership</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        <div>
                            <div className="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                                <img className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                            </div>
                            <span className="text-title mt-2 block text-sm">Méschac Irung</span>
                            <span className="text-caption block text-xs">Creator</span>
                        </div>

                        <div>
                            <div className="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                                <img className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/68236786?v=4" alt="Théo Balick" height="460" width="460" loading="lazy" />
                            </div>
                            <span className="text-title mt-2 block text-sm">Théo Balick</span>
                            <span className="text-caption block text-xs">Frontend Dev</span>
                        </div>

                        <div>
                            <div className="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                                <img className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/99137927?v=4" alt="Glodie Lukose" height="460" width="460" loading="lazy" />
                            </div>
                            <span className="text-title mt-2 block text-sm">Glodie Lukose</span>
                            <span className="text-caption block text-xs">Frontend Dev</span>
                        </div>

                        <div>
                            <div className="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                                <img className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/31113941?v=4" alt="Bernard Ngandu" height="460" width="460" loading="lazy" />
                            </div>
                            <span className="text-title mt-2 block text-sm">Bernard Ngandu</span>
                            <span className="text-caption block text-xs">Backend Dev</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-title mb-6 text-lg font-medium">Engineering</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        <div>
                            <div className="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                                <img className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                            </div>
                            <span className="text-title mt-2 block text-sm">Méschac Irung</span>
                            <span className="text-caption block text-xs">Creator</span>
                        </div>

                        <div>
                            <div className="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                                <img className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/68236786?v=4" alt="Théo Balick" height="460" width="460" loading="lazy" />
                            </div>
                            <span className="text-title mt-2 block text-sm">Théo Balick</span>
                            <span className="text-caption block text-xs">Frontend Dev</span>
                        </div>

                        <div>
                            <div className="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                                <img className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/99137927?v=4" alt="Glodie Lukose" height="460" width="460" loading="lazy" />
                            </div>
                            <span className="text-title mt-2 block text-sm">Glodie Lukose</span>
                            <span className="text-caption block text-xs">Frontend Dev</span>
                        </div>

                        <div>
                            <div className="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                                <img className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/31113941?v=4" alt="Bernard Ngandu" height="460" width="460" loading="lazy" />
                            </div>
                            <span className="text-title mt-2 block text-sm">Bernard Ngandu</span>
                            <span className="text-caption block text-xs">Backend Dev</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-title mb-6 text-lg font-medium">Marketing</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        <div>
                            <div className="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                                <img className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                            </div>
                            <span className="text-title mt-2 block text-sm">Méschac Irung</span>
                            <span className="text-caption block text-xs">Creator</span>
                        </div>

                        <div>
                            <div className="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                                <img className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/68236786?v=4" alt="Théo Balick" height="460" width="460" loading="lazy" />
                            </div>
                            <span className="text-title mt-2 block text-sm">Théo Balick</span>
                            <span className="text-caption block text-xs">Frontend Dev</span>
                        </div>

                        <div>
                            <div className="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                                <img className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/99137927?v=4" alt="Glodie Lukose" height="460" width="460" loading="lazy" />
                            </div>
                            <span className="text-title mt-2 block text-sm">Glodie Lukose</span>
                            <span className="text-caption block text-xs">Frontend Dev</span>
                        </div>

                        <div>
                            <div className="rounded-avatar bg-ui size-20 border p-0.5 shadow shadow-gray-950/5">
                                <img className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover" src="https://avatars.githubusercontent.com/u/31113941?v=4" alt="Bernard Ngandu" height="460" width="460" loading="lazy" />
                            </div>
                            <span className="text-title mt-2 block text-sm">Bernard Ngandu</span>
                            <span className="text-caption block text-xs">Backend Dev</span>
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