import type { Code } from "src/types";

const htmlCode = `<section class="py-32">
    <div class="pb-36">
        <div class="mx-auto px-6 max-w-5xl">
            <div class="text-center">
                <h2 class="text-3xl text-title font-semibold">Built by the Community <br> for the Community</h2>
                <p class="mt-6 text-body">Harum quae dolore orrupti aut temporibus ariatur.</p>
            </div>
            <div class="mt-12 max-w-lg mx-auto flex justify-center flex-wrap gap-3">
                <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" class="avatar sz-xxl">
                    <img alt="John Doe" src="https://randomuser.me/api/portraits/men/1.jpg" loading="lazy" width="120" height="120" />
                </a>
                <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" class="avatar sz-xxl">
                    <img alt="John Doe" src="https://randomuser.me/api/portraits/men/2.jpg" loading="lazy" width="120" height="120" />
                </a>
                <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" class="avatar sz-xxl">
                    <img alt="John Doe" src="https://randomuser.me/api/portraits/men/3.jpg" loading="lazy" width="120" height="120" />
                </a>
                <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" class="avatar sz-xxl">
                    <img alt="John Doe" src="https://randomuser.me/api/portraits/men/4.jpg" loading="lazy" width="120" height="120" />
                </a>
                <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" class="avatar sz-xxl">
                    <img alt="John Doe" src="https://randomuser.me/api/portraits/men/5.jpg" loading="lazy" width="120" height="120" />
                </a>
                <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" class="avatar sz-xxl">
                    <img alt="John Doe" src="https://randomuser.me/api/portraits/men/6.jpg" loading="lazy" width="120" height="120" />
                </a>
                <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" class="avatar sz-xxl">
                    <img alt="John Doe" src="https://randomuser.me/api/portraits/men/7.jpg" loading="lazy" width="120" height="120" />
                </a>
                <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" class="avatar sz-xxl">
                    <img alt="John Doe" src="https://randomuser.me/api/portraits/men/1.jpg" loading="lazy" width="120" height="120" />
                </a>
                <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" class="avatar sz-xxl">
                    <img alt="John Doe" src="https://randomuser.me/api/portraits/men/8.jpg" loading="lazy" width="120" height="120" />
                </a>
                <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" class="avatar sz-xxl">
                    <img alt="John Doe" src="https://randomuser.me/api/portraits/men/9.jpg" loading="lazy" width="120" height="120" />
                </a>
                <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" class="avatar sz-xxl">
                    <img alt="John Doe" src="https://randomuser.me/api/portraits/men/10.jpg" loading="lazy" width="120" height="120" />
                </a>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `export default function CommunitySection(){
    return (
        <section className="py-32">
            <div className="pb-36">
                <div className="mx-auto px-6 max-w-5xl">
                    <div className="text-center">
                        <h2 className="text-3xl text-title font-semibold">Built by the Community <br> for the Community</h2>
                        <p className="mt-6 text-body">Harum quae dolore orrupti aut temporibus ariatur.</p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto flex justify-center flex-wrap gap-3">
                        <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="avatar sz-xxl">
                            <img alt="John Doe" src="https://randomuser.me/api/portraits/men/1.jpg" loading="lazy" width={120} height={120} />
                        </a>
                        <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="avatar sz-xxl">
                            <img alt="John Doe" src="https://randomuser.me/api/portraits/men/2.jpg" loading="lazy" width={120} height={120} />
                        </a>
                        <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="avatar sz-xxl">
                            <img alt="John Doe" src="https://randomuser.me/api/portraits/men/3.jpg" loading="lazy" width={120} height={120} />
                        </a>
                        <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="avatar sz-xxl">
                            <img alt="John Doe" src="https://randomuser.me/api/portraits/men/4.jpg" loading="lazy" width={120} height={120} />
                        </a>
                        <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="avatar sz-xxl">
                            <img alt="John Doe" src="https://randomuser.me/api/portraits/men/5.jpg" loading="lazy" width={120} height={120} />
                        </a>
                        <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="avatar sz-xxl">
                            <img alt="John Doe" src="https://randomuser.me/api/portraits/men/6.jpg" loading="lazy" width={120} height={120} />
                        </a>
                        <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="avatar sz-xxl">
                            <img alt="John Doe" src="https://randomuser.me/api/portraits/men/7.jpg" loading="lazy" width={120} height={120} />
                        </a>
                        <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="avatar sz-xxl">
                            <img alt="John Doe" src="https://randomuser.me/api/portraits/men/1.jpg" loading="lazy" width={120} height={120} />
                        </a>
                        <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="avatar sz-xxl">
                            <img alt="John Doe" src="https://randomuser.me/api/portraits/men/8.jpg" loading="lazy" width={120} height={120} />
                        </a>
                        <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="avatar sz-xxl">
                            <img alt="John Doe" src="https://randomuser.me/api/portraits/men/9.jpg" loading="lazy" width={120} height={120} />
                        </a>
                        <a href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="avatar sz-xxl">
                            <img alt="John Doe" src="https://randomuser.me/api/portraits/men/10.jpg"loading="lazy" width={120} height={120} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}`

const nuxtjsCode = ``

export const communityCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}