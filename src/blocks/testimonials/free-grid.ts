import type { Code } from "src/types";

const htmlCode = `<section>
    <div class="py-32">
        <div class="mx-auto px-6 max-w-5xl">
            <div class="text-center">
                <h2 class="text-3xl text-title font-semibold">Loved by the Community</h2>
                <p class="mt-6 text-body">Harum quae dolore orrupti aut temporibus ariatur.</p>
            </div>
            <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div class="space-y-3">
                    <div class="card variant-outlined group">
                        <div class="flex gap-3">
                            <span class="relative avatar block text-lg sz-md">
                                <img class="h-full w-full object-cover" alt="John Doe" src="https://randomuser.me/api/portraits/men/1.jpg" loading="lazy" width="120" height="120">
                            </span>
                            <div class="w-[calc(100%-3.25rem)]">
                                <h3 class="font-medium text-title">Jonathan Yombo</h3>
                                <span class="block text-sm tracking-wide text-caption">Software Ingeneer</span>
                                <blockquote class="mt-3">
                                    <p class="text-gray-700 dark:text-gray-300">
                                        Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div class="card variant-outlined group">
                        <div class="flex gap-3">
                            <span class="relative avatar block text-lg sz-md">
                                <img class="h-full w-full object-cover" alt="John Doe" src="https://randomuser.me/api/portraits/men/6.jpg" loading="lazy" width="120" height="120">
                            </span>
                            <div class="w-[calc(100%-3.25rem)]">
                                <h3 class="font-medium text-gray-950 dark:text-white">Yves Kalume</h3>
                                <span class="block text-sm tracking-wide text-gray-600 dark:text-gray-400">GDE - Android</span>
                                <blockquote class="mt-3">
                                    <p class="text-gray-700 dark:text-gray-300">
                                        With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div class="card variant-outlined group">
                        <div class="flex gap-3">
                            <span class="relative avatar block text-lg sz-md">
                                <img class="h-full w-full object-cover" alt="John Doe" src="https://randomuser.me/api/portraits/men/7.jpg" loading="lazy" width="120" height="120">
                            </span>
                            <div class="w-[calc(100%-3.25rem)]">
                                <h3 class="font-medium text-gray-950 dark:text-white">Yucel Faruksahan</h3>
                                <span class="block text-sm tracking-wide text-gray-600 dark:text-gray-400">Tailkits Creator</span>
                                <blockquote class="mt-3">
                                    <p class="text-gray-700 dark:text-gray-300">
                                        Great work on tailfolio template. This is one of the best personal website that I have seen so far :)
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div class="card variant-outlined group">
                        <div class="flex gap-3">
                            <span class="relative avatar block text-lg sz-md">
                                <img class="h-full w-full object-cover" alt="John Doe" src="https://randomuser.me/api/portraits/men/8.jpg" loading="lazy" width="120" height="120">
                            </span>
                            <div class="w-[calc(100%-3.25rem)]">
                                <h3 class="font-medium text-gray-950 dark:text-white">Anonymous author</h3>
                                <span class="block text-sm tracking-wide text-gray-600 dark:text-gray-400">Doing something</span>
                                <blockquote class="mt-3">
                                    <p class="text-gray-700 dark:text-gray-300">
                                        I am really new to Tailwind and I want to give a go to make some page on my own. I searched a lot of hero pages and blocks online. However, most of them are not giving me a clear view or needed some HTML/CSS coding background to make some changes from the original or too expensive to have. I downloaded the one of Tailus template which is very clear to understand at the start and you could modify the codes/blocks to fit perfectly on your purpose of the page.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-3">
                    <!-- Start of Testimonial 3 -->
                    <div class="card variant-outlined group">
                        <div class="flex gap-3">
                            <span class="relative avatar block text-lg sz-md">
                                <img class="h-full w-full object-cover" alt="John Doe" src="https://randomuser.me/api/portraits/men/4.jpg" loading="lazy" width="120" height="120">
                            </span>
                            <div class="w-[calc(100%-3.25rem)]">
                                <h3 class="font-medium text-gray-950 dark:text-white">Shekinah Tshiokufila</h3>
                                <span class="block text-sm tracking-wide text-gray-600 dark:text-gray-400">Senior Software Ingeneer</span>
                                <blockquote class="mt-3">
                                    <p class="text-gray-700 dark:text-gray-300">
                                        Tailus is redefining the standard of web design, with these blocks it provides an easy and efficient way for those who love beauty but may lack the time to implement it. I can only recommend this incredible wonder.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <!-- Start of Testimonial 4 -->
                    <div class="card variant-outlined group">
                        <div class="flex gap-3">
                            <span class="relative avatar block text-lg sz-md">
                                <img class="h-full w-full object-cover" alt="John Doe" src="https://randomuser.me/api/portraits/men/2.jpg" loading="lazy" width="120" height="120">
                            </span>
                            <div class="w-[calc(100%-3.25rem)]">
                                <h3 class="font-medium text-gray-950 dark:text-white">Oketa Fred</h3>
                                <span class="block text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
                                <blockquote class="mt-3">
                                    <p class="text-gray-700 dark:text-gray-300">
                                        I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <!-- Start of Testimonial 5 -->
                    <div class="card variant-outlined group">
                        <div class="flex gap-3">
                            <span class="relative avatar block text-lg sz-md">
                                <img class="h-full w-full object-cover" alt="John Doe" src="https://randomuser.me/api/portraits/men/5.jpg">
                            </span>
                            <div class="w-[calc(100%-3.25rem)]">
                                <h3 class="font-medium text-gray-950 dark:text-white">Zeki</h3>
                                <span class="block text-sm tracking-wide text-gray-600 dark:text-gray-400">Founder of ChatExtend</span>
                                <blockquote class="mt-3">
                                    <p class="text-gray-700 dark:text-gray-300">
                                        Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div class="card variant-outlined group">
                        <div class="flex gap-3">
                            <span class="relative avatar block text-lg sz-md">
                                <img class="h-full w-full object-cover" alt="John Doe" src="https://randomuser.me/api/portraits/men/9.jpg" loading="lazy" width="120" height="120">
                            </span>
                            <div class="w-[calc(100%-3.25rem)]">
                                <h3 class="font-medium text-gray-950 dark:text-white">Joseph Kitheka</h3>
                                <span class="block text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
                                <blockquote class="mt-3">
                                    <p class="text-gray-700 dark:text-gray-300">
                                        Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development!
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-3">
                    <div class="card variant-outlined group">
                        <div class="flex gap-3">
                            <span class="relative avatar block text-lg sz-md">
                                <img class="h-full w-full object-cover" alt="John Doe" src="https://randomuser.me/api/portraits/men/10.jpg" loading="lazy" width="120" height="120">
                            </span>
                            <div class="w-[calc(100%-3.25rem)]">
                                <h3 class="font-medium text-gray-950 dark:text-white">Khatab Wedaa</h3>
                                <span class="block text-sm tracking-wide text-gray-600 dark:text-gray-400">MerakiUI Creator</span>
                                <blockquote class="mt-3">
                                    <p class="text-gray-700 dark:text-gray-300">
                                       Tailus is an elegant, clean, and responsive tailwind css components it's very helpfull to start fast with your project.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div class="card variant-outlined group">
                        <div class="flex gap-3">
                            <span class="relative avatar block text-lg sz-md">
                                <img class="h-full w-full object-cover" alt="John Doe" src="https://randomuser.me/api/portraits/men/11.jpg" loading="lazy" width="120" height="120">
                            </span>
                            <div class="w-[calc(100%-3.25rem)]">
                                <h3 class="font-medium text-gray-950 dark:text-white">Rodrigo Aguilar</h3>
                                <span class="block text-sm tracking-wide text-gray-600 dark:text-gray-400">TailwindAwesome Creator</span>
                                <blockquote class="mt-3">
                                    <p class="text-gray-700 dark:text-gray-300">
                                       I love Tailus ❤️. The component blocks are well-structured, simple to use, and beautifully designed. It makes it really easy to have a good-looking website in no time.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div class="card variant-outlined group">
                        <div class="flex gap-3">
                            <span class="relative avatar block text-lg sz-md">
                                <img class="h-full w-full object-cover" alt="John Doe" src="https://randomuser.me/api/portraits/men/12.jpg" loading="lazy" width="120" height="120">
                            </span>
                            <div class="w-[calc(100%-3.25rem)]">
                                <h3 class="font-medium text-gray-950 dark:text-white">Eric Ampire</h3>
                                <span class="block text-sm tracking-wide text-gray-600 dark:text-gray-400">Mobile Engineer at @BRPNews • @GoogleDevExpert for Android </span>
                                <blockquote class="mt-3">
                                    <p class="text-gray-700 dark:text-gray-300">
                                       Tailus templates are the perfect solution for anyone who wants to create a beautiful and functional website without any web design experience. The templates are easy to use, customizable, and responsive, and the support team is always available to help. I highly recommend Tailus templates to anyone who is looking to create a website.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div class="card variant-outlined group">
                        <div class="flex gap-3">
                            <span class="relative avatar block text-lg sz-md">
                                <img class="h-full w-full object-cover" alt="John Doe" src="https://randomuser.me/api/portraits/men/13.jpg" loading="lazy" width="120" height="120">
                            </span>
                            <div class="w-[calc(100%-3.25rem)]">
                                <h3 class="font-medium text-gray-950 dark:text-white">Roland Tubonge</h3>
                                <span class="block text-sm tracking-wide text-gray-600 dark:text-gray-400">Software Engineer</span>
                                <blockquote class="mt-3">
                                    <p class="text-gray-700 dark:text-gray-300">
                                       Tailus is so well designed that even with a very poor knowledge of web design you can do miracles. Let yourself be seduced!
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `import React from 'react';

type Testimonial = {
    name: string;
    role: string;
    image: string;
    quote: string;
};

const testimonials:Testimonial[] = [
    {
        name: "Jonathan Yombo",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        quote: "Tailus is really extraordinary and very practical, no need to break your head. A real gold mine."
    },
    {
        name: "Yves Kalume",
        role: "GDE - Android",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        quote: "With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus."
    },
    {
        name: "Yucel Faruksahan",
        role: "Tailkits Creator",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        quote: "Great work on tailfolio template. This is one of the best personal website that I have seen so far :)"
    },
    {
        name: "Anonymous author",
        role: "Doing something",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
        quote: "I am really new to Tailwind and I want to give a go to make some page on my own. I searched a lot of hero pages and blocks online. However, most of them are not giving me a clear view or needed some HTML/CSS coding background to make some changes from the original or too expensive to have. I downloaded the one of Tailus template which is very clear to understand at the start and you could modify the codes/blocks to fit perfectly on your purpose of the page."
    },
    {
        name: "Shekinah Tshiokufila",
        role: "Senior Software Engineer",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        quote: "Tailus is redefining the standard of web design, with these blocks it provides an easy and efficient way for those who love beauty but may lack the time to implement it. I can only recommend this incredible wonder."
    },
    {
        name: "Oketa Fred",
        role: "Fullstack Developer",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        quote: "I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze."
    },
    {
        name: "Zeki",
        role: "Founder of ChatExtend",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        quote: "Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly."
    },
    {
        name: "Joseph Kitheka",
        role: "Fullstack Developer",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
        quote: "Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development!"
    },
    {
        name: "Khatab Wedaa",
        role: "MerakiUI Creator",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
        quote: "Tailus is an elegant, clean, and responsive tailwind css components it's very helpful to start fast with your project."
    },
    {
        name: "Rodrigo Aguilar",
        role: "TailwindAwesome Creator",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        quote: "I love Tailus ❤️. The component blocks are well-structured, simple to use, and beautifully designed. It makes it really easy to have a good-looking website in no time."
    },
    {
        name: "Eric Ampire",
        role: "Mobile Engineer at @BRPNews • @GoogleDevExpert for Android",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        quote: "Tailus templates are the perfect solution for anyone who wants to create a beautiful and functional website without any web design experience. The templates are easy to use, customizable, and responsive, and the support team is always available to help. I highly recommend Tailus templates to anyone who is looking to create a website."
    },
    {
        name: "Roland Tubonge",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/13.jpg",
        quote: "Tailus is so well designed that even with a very poor knowledge of web design you can do miracles. Let yourself be seduced!"
    }
];

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3));


export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-32">
                <div className="mx-auto px-6 max-w-5xl">
                    <div className="text-center">
                        <h2 className="text-3xl text-title font-semibold">Loved by the Community</h2>
                        <p className="mt-6 text-body">Harum quae dolore orrupti aut temporibus ariatur.</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="space-y-3">
                                {chunk.map((testimonial, index) => (
                                    <div key={index} className="card variant-outlined group">
                                        <div className="flex gap-3">
                                            <span className="relative avatar block text-lg sz-md">
                                                <img className="h-full w-full object-cover" alt={testimonial.name} src={testimonial.image} loading="lazy" width="120" height="120" />
                                            </span>
                                            <div className="w-[calc(100%-3.25rem)]">
                                                <h3 className="font-medium text-title">{testimonial.name}</h3>
                                                <span className="block text-sm tracking-wide text-caption">{testimonial.role}</span>
                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">
                                                        {testimonial.quote}
                                                    </p>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}`

const nuxtjsCode = ``

export const freeGridCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}