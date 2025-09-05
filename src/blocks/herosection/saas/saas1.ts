import type { Code } from "src/types";

const htmlCode = `<header>
    <nav id="navbar" class="fixed group z-20 border-b border-dashed w-full bg-white dark:bg-gray-950/50 backdrop-blur md:relative lg:bg-transparent">
        <div class="max-w-5xl m-auto px-6">
            <div class="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                <div class="w-full flex justify-between lg:w-auto">
                    <a href="/" aria-label="home" class="flex space-x-2 items-center">
                        <svg class="h-7 text-title" height="28" viewBox="0 0 298 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M107 30.7857H113.6V16.3429H122.686V30.7857H131.386V38.5H122.686V53.5429C122.686 55.4286 123 56.8429 123.629 57.7857C124.286 58.7286 125.214 59.2 126.414 59.2C127.414 59.2 128.2 59.0143 128.771 58.6429C129.371 58.2714 129.729 58.0143 129.843 57.8714L133.229 64.5143C133.057 64.6857 132.557 64.9714 131.729 65.3714C130.9 65.7714 129.829 66.1429 128.514 66.4857C127.2 66.8286 125.7 67 124.014 67C121.043 67 118.557 66.1143 116.557 64.3429C114.586 62.5714 113.6 59.8 113.6 56.0286V38.5H107V30.7857ZM167.156 65.9714V59.4571C166.928 60.1429 166.27 61.0857 165.185 62.2857C164.128 63.4857 162.67 64.5714 160.813 65.5429C158.985 66.5143 156.813 67 154.299 67C151.013 67 148.056 66.2143 145.428 64.6429C142.799 63.0714 140.728 60.8857 139.213 58.0857C137.699 55.2857 136.942 52.0571 136.942 48.4C136.942 44.7429 137.699 41.5143 139.213 38.7143C140.728 35.9143 142.799 33.7286 145.428 32.1571C148.056 30.5571 151.013 29.7571 154.299 29.7571C156.756 29.7571 158.885 30.1857 160.685 31.0429C162.485 31.9 163.928 32.8857 165.013 34C166.128 35.1143 166.813 36.0857 167.07 36.9143V30.7857H176.156V65.9714H167.156ZM145.985 48.4C145.985 50.6571 146.485 52.6286 147.485 54.3143C148.485 56 149.785 57.3 151.385 58.2143C153.013 59.1286 154.756 59.5857 156.613 59.5857C158.613 59.5857 160.385 59.1143 161.928 58.1714C163.499 57.2286 164.728 55.9286 165.613 54.2714C166.528 52.5857 166.985 50.6286 166.985 48.4C166.985 46.1714 166.528 44.2286 165.613 42.5714C164.728 40.8857 163.499 39.5714 161.928 38.6286C160.385 37.6571 158.613 37.1714 156.613 37.1714C154.756 37.1714 153.013 37.6429 151.385 38.5857C149.785 39.5 148.485 40.8 147.485 42.4857C146.485 44.1714 145.985 46.1429 145.985 48.4ZM186.271 65.9714V30.7857H195.4V65.9714H186.271ZM190.943 20.2429C189.4 20.2429 188.071 19.6857 186.957 18.5714C185.871 17.4571 185.329 16.1286 185.329 14.5857C185.329 13.0429 185.871 11.7143 186.957 10.6C188.071 9.45714 189.4 8.88571 190.943 8.88571C191.971 8.88571 192.914 9.15714 193.771 9.7C194.657 10.2143 195.357 10.9 195.871 11.7571C196.414 12.5857 196.686 13.5286 196.686 14.5857C196.686 16.1286 196.129 17.4571 195.014 18.5714C193.9 19.6857 192.543 20.2429 190.943 20.2429ZM215.437 65.9714H206.222V7H215.437V65.9714ZM234.044 48.0571C234.044 51.4857 234.744 54.2143 236.144 56.2429C237.572 58.2714 239.815 59.2857 242.872 59.2857C245.958 59.2857 248.201 58.2714 249.601 56.2429C251.001 54.2143 251.701 51.4857 251.701 48.0571V30.7857H260.787V49.2143C260.787 52.7571 260.087 55.8714 258.687 58.5571C257.287 61.2143 255.258 63.2857 252.601 64.7714C249.944 66.2571 246.701 67 242.872 67C239.072 67 235.844 66.2571 233.187 64.7714C230.53 63.2857 228.501 61.2143 227.101 58.5571C225.701 55.8714 225.001 52.7571 225.001 49.2143V30.7857H234.044V48.0571ZM284.016 29.7571C285.988 29.7571 287.816 29.9429 289.502 30.3143C291.188 30.6857 292.631 31.1286 293.831 31.6429C295.031 32.1571 295.859 32.5857 296.316 32.9286L292.973 38.5857C292.402 38.1 291.373 37.5429 289.888 36.9143C288.431 36.2857 286.788 35.9714 284.959 35.9714C283.131 35.9714 281.588 36.3 280.331 36.9571C279.073 37.6143 278.445 38.6 278.445 39.9143C278.445 41.2 279.102 42.2286 280.416 43C281.759 43.7714 283.573 44.4143 285.859 44.9286C287.745 45.3571 289.545 45.9571 291.259 46.7286C292.973 47.4714 294.373 48.5429 295.459 49.9429C296.573 51.3143 297.131 53.1571 297.131 55.4714C297.131 57.6714 296.659 59.5143 295.716 61C294.802 62.4571 293.573 63.6286 292.031 64.5143C290.488 65.4 288.773 66.0286 286.888 66.4C285.031 66.8 283.159 67 281.273 67C278.959 67 276.888 66.7714 275.059 66.3143C273.259 65.8571 271.759 65.3286 270.559 64.7286C269.359 64.1 268.502 63.5714 267.988 63.1429L271.331 56.8C272.073 57.5143 273.288 58.2714 274.973 59.0714C276.659 59.8429 278.545 60.2286 280.631 60.2286C282.859 60.2286 284.645 59.8 285.988 58.9429C287.331 58.0857 288.002 56.9429 288.002 55.5143C288.002 54.4571 287.673 53.6 287.016 52.9429C286.388 52.2857 285.516 51.7571 284.402 51.3571C283.288 50.9571 282.045 50.6 280.673 50.2857C279.388 49.9714 278.088 49.5714 276.773 49.0857C275.488 48.5714 274.302 47.9143 273.216 47.1143C272.131 46.2857 271.259 45.2571 270.602 44.0286C269.945 42.8 269.616 41.3571 269.616 39.7C269.616 37.5857 270.288 35.7857 271.631 34.3C272.973 32.8143 274.745 31.6857 276.945 30.9143C279.145 30.1429 281.502 29.7571 284.016 29.7571Z" fill="currentColor"></path>
                            <path d="M53.6523 31.5142C53.6523 28.5967 51.2872 26.2316 48.3697 26.2316C45.4522 26.2316 43.0871 28.5967 43.0871 31.5142C43.0871 34.4317 45.4522 36.7968 48.3697 36.7968C51.2872 36.7968 53.6523 34.4317 53.6523 31.5142Z" fill="currentColor"></path>
                            <path d="M42.6502 36.769C42.5195 36.7593 42.3875 36.7543 42.2543 36.7543C39.3572 36.7543 37.0087 39.1029 37.0087 42C37.0087 44.8971 39.3572 47.2457 42.2543 47.2457C45.1514 47.2457 47.5 44.8971 47.5 42C47.5 40.92 47.1736 39.9162 46.6141 39.0819C45.0637 38.7237 43.691 37.9013 42.6502 36.769Z" fill="currentColor"></path>
                            <path d="M34.8047 39.7898C34.5971 40.4904 34.4857 41.2322 34.4857 42C34.4857 42.7679 34.5971 43.5097 34.8047 44.2102C33.969 46.0163 32.1408 47.2693 30.02 47.2693C27.1098 47.2693 24.7507 44.9102 24.7507 42C24.7507 39.0899 27.1098 36.7308 30.02 36.7308C32.1408 36.7308 33.969 37.9837 34.8047 39.7898Z" fill="currentColor"></path>
                            <path d="M48.3708 47.2122C51.2834 47.2122 53.6445 49.5733 53.6445 52.4859C53.6445 55.3984 51.2834 57.7595 48.3708 57.7595C45.4583 57.7595 43.0971 55.3984 43.0971 52.4859C43.0971 51.4104 43.4191 50.4101 43.9718 49.5761C45.5507 49.2193 46.9472 48.3816 47.9994 47.225C48.1221 47.2165 48.246 47.2122 48.3708 47.2122Z" fill="currentColor"></path>
                            <path d="M59.7461 42C59.7461 39.0938 57.3901 36.7378 54.4838 36.7378C54.3567 36.7378 54.2306 36.7423 54.1057 36.7512C53.0573 37.8988 51.6691 38.7307 50.1003 39.0877C49.9504 39.3129 49.8173 39.5503 49.703 39.7982C49.909 40.4962 50.0195 41.2352 50.0195 42C50.0195 42.7648 49.909 43.5038 49.703 44.2019C49.8173 44.4497 49.9504 44.6872 50.1003 44.9124C51.6691 45.2694 53.0573 46.1013 54.1057 47.2489C54.2306 47.2578 54.3567 47.2623 54.4838 47.2623C57.3901 47.2623 59.7461 44.9063 59.7461 42Z" fill="currentColor"></path>
                            <path d="M40.6028 52.4859C40.6028 51.718 40.7143 50.9761 40.9219 50.2755C40.809 50.0315 40.678 49.7976 40.5306 49.5755C38.9544 49.2187 37.56 48.3825 36.5088 47.2283C36.3856 47.2197 36.2612 47.2153 36.1358 47.2153C36.0102 47.2153 35.8855 47.2197 35.7621 47.2284C34.7111 48.3823 33.317 49.2184 31.7411 49.5753C31.1877 50.4093 30.8653 51.4099 30.8653 52.4859C30.8653 55.3967 33.225 57.7564 36.1358 57.7564C38.2573 57.7564 40.0861 56.503 40.9219 54.6962C40.7143 53.9957 40.6028 53.2538 40.6028 52.4859Z" fill="currentColor"></path>
                            <path d="M40.5094 34.4263C40.6608 34.1992 40.795 33.9595 40.9102 33.7094C40.705 33.0126 40.595 32.2752 40.595 31.512C40.595 30.7489 40.705 30.0115 40.9102 29.3147C40.0777 27.5058 38.2492 26.25 36.1274 26.25C33.2213 26.25 30.8654 28.6059 30.8654 31.512C30.8654 32.5894 31.1892 33.5912 31.7448 34.4253C33.3117 34.7828 34.6983 35.6141 35.7457 36.7605C35.8718 36.7695 35.9991 36.7741 36.1274 36.7741C36.2572 36.7741 36.3858 36.7694 36.5132 36.7602C37.5596 35.615 38.9445 34.7843 40.5094 34.4263Z" fill="currentColor"></path>
                            <path fillrule="evenodd" cliprule="evenodd" d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84ZM42 74.518C24.0408 74.518 9.48201 59.9592 9.48201 42C9.48201 24.0408 24.0408 9.48201 42 9.48201C59.9592 9.48201 74.518 24.0408 74.518 42C74.518 59.9592 59.9592 74.518 42 74.518Z" fill="currentColor"></path>
                        </svg>
                    </a>
                    <button id="menu-btn" aria-label="open menu" class="block relative z-20 btn variant-ghost sz-md icon-only -mr-2.5 cursor-pointer lg:hidden">
                        <svg class="text-title size-6 m-auto transition-[transform,opacity] duration-300 group-data-[state=active]:scale-0 group-data-[state=active]:rotate-180 group-data-[state=active]:opacity-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                        <svg class="text-title size-6 absolute opacity-0 transition-[transform,opacity] duration-300 inset-0 m-auto scale-0 -rotate-180 group-data-[state=active]:scale-100 group-data-[state=active]:rotate-0 group-data-[state=active]:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div class="w-full hidden group-data-[state=active]:block lg:group-data-[state=active]:flex flex-wrap justify-end items-center lg:gap-6 mb-6 space-y-8 p-6 border rounded-3xl shadow-2xl shadow-gray-300/20 bg-ui dark:lg:bg-transparent lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-fit lg:shadow-none dark:shadow-none lg:border-transparent">
                    <div class="lg:pr-4">
                        <ul class="space-y-6 text-base lg:text-sm lg:flex lg:gap-6 lg:space-y-0">
                            <li>
                                <a href="#" class="block text-body hover:text-title">
                                    <span>Features</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block text-body hover:text-title">
                                    <span>Solution</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block text-body hover:text-title">
                                    <span>Pricing</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block text-body hover:text-title">
                                    <span>About</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="w-full space-y-3 flex flex-col sm:flex-row sm:space-y-0 md:w-fit lg:border-l lg:pl-6 sm:gap-3">
                        <a href="#" class="btn variant-soft sz-md lg:sz-xs">
                            <span>Login</span>                    
                        </a>
                        <a href="#" class="btn variant-neutral sz-md lg:sz-xs">
                            <span class="btn-label">Sign Up</span>                    
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
<main>
    <section class="overflow-hidden">
        <svg class="absolute inset-0 z-[2] opacity-25 dark:opacity-100 mx-auto w-full text-secondary-100 blur-3xl dark:text-white/5" viewBox="0 0 807 355" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M496.5 210C632.9 186.8 760.33 60.333 807 0C764.17 84 654.8 263.1 560 307.5C465.2 351.9 147.167 356.667 0 353.5C108.667 315.333 360.1 233.2 496.5 210Z" fill="currentColor"></path>
        </svg>
        <svg class="absolute inset-0 z-[2] opacity-25 dark:opacity-100 m-auto w-full text-primary-200 blur-3xl dark:text-primary-500/5" viewBox="0 0 807 355" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M496.5 210C632.9 186.8 760.33 60.333 807 0C764.17 84 654.8 263.1 560 307.5C465.2 351.9 147.167 356.667 0 353.5C108.667 315.333 360.1 233.2 496.5 210Z" fill="currentColor"></path>
        </svg>
        <div class="relative max-w-5xl mx-auto px-6 py-28 lg:py-20">
            <div class="lg:flex lg:items-center lg:gap-12">
                <div class="relative z-10 text-center max-w-xl mx-auto lg:ml-0 lg:text-left lg:w-1/2">
                    <a href="#" class="annonce variant-mixed gap-2 sz-sm w-fit mx-auto lg:ml-0">
                        <span class="annonce-concern sz-xs variant-neutral">New</span>
                        <span class="text-title text-sm">Introduction Tailus UI Html</span>
                        <span class="h-4 w-px block bg-[--ui-border-color]"></span>
                        <span class="text-primary-600 dark:text-primary-400 text-sm">Read</span>
                    </a>
                    <h1 class="mt-10 text-title font-bold text-balance text-4xl md:text-5xl xl:text-5xl">Production Ready Digital Marketing blocks</h1>
                    <p class="mt-8 text-body">Error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
                    <div>
                        <form action="" class="max-w-sm mx-auto lg:ml-0 lg:mr-auto my-10 lg:my-12">
                            <div class="relative grid bg-ui [grid-template-columns:1fr_auto] items-center border pr-3 shadow shadow-gray-950/5 rounded-[calc(var(--btn-radius)+0.75rem)] outline-2 outline-offset-2 outline-primary-600 has-[input:focus]:outline">
                                <svg class="absolute inset-y-0 left-5 my-auto size-5 pointer-events-none text-caption" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>

                                <input autocomplete="email" placeholder="Your mail address" class="pl-12 h-14 w-full bg-transparent focus:outline-none" type="email">
                                <div class="md:pr-1.5 lg:pr-0">
                                    <button title="Start buying" class="btn w-fit variant-primary sz-md">
                                        <span class="btn-label hidden md:block">
                                            Get Started
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="relative size-5 mx-auto md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ul class="list-inside list-disc flex gap-2 justify-center items-center lg:flex-col lg:items-start">
                            <li>Faster</li>
                            <li>Modern</li>
                            <li>100% Customizable</li>
                        </ul>
                    </div>
                </div>
                <div class="relative lg:absolute inset-x-0 right-6 mt-12 lg:mt-0 lg:inset-y-16 h-fit mx-auto lg:mr-0 ml-auto max-w-md [--ui-shadow-border:var(--ui-border-color)]">  
                    <img class="rounded-card relative z-10 p-0.5 bg-ui tls-shadow shadow-gray-950/[0.05]" src="/blocks/edit-bar.png" alt="project illustration" height="" width="" loading="lazy">
                    <div class="absolute -inset-20 sm:-inset-40 z-[1] bg-gradient-to-b from-gray-50 via-transparent to-gray-50 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>
                    <div class="absolute -inset-20 sm:-inset-40 z-[1] bg-gradient-to-r from-gray-50 via-transparent to-gray-50 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>
                    <div data-shade="glassy" class="absolute -inset-20 sm:-inset-40 [--ui-border-color:theme(colors.primary.200)] dark:[--ui-border-color:theme(colors.primary.500/0.25)] bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div class="relative mt-4 z-10 before:absolute before:inset-x-2 before:-bottom-1.5 before:top-0 before:rounded-card before:bg-ui before:tls-shadow-lg before:shadow-gray-950/[0.03]">
                        <div class="relative overflow-hidden tls-shadow shadow-gray-950/[0.05] bg-ui rounded-card">
                            <img src="/blocks/ar.png" alt="project illustration" height="" width="" loading="lazy">
                            <img src="/blocks/cat.png" alt="project illustration" height="" width="" loading="lazy">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>                          

<script>
    let navbar = document.querySelector('#navbar');
    let btn = document.querySelector('#menu-btn');

    btn.addEventListener('click', () => {
        navbar.dataset.state = navbar.dataset.state === 'active' ? '' : 'active';
    });
</script>`

const astroCode = `---
import { Image } from 'astro:assets'
import areaChart from '/blocks/ar.png'
import categoryChart from '/blocks/cat.png'
import toolbar from '/blocks/edit-bar.png'
---

<header>
    <nav id="navbar" class="group fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative lg:bg-transparent dark:bg-gray-950/50">
        <div class="m-auto max-w-5xl px-6">
            <div class="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                <div class="flex w-full justify-between lg:w-auto">
                    <a href="/" aria-label="home" class="flex items-center space-x-2">
                        <svg class="text-title h-7" height="28" viewBox="0 0 298 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M107 30.7857H113.6V16.3429H122.686V30.7857H131.386V38.5H122.686V53.5429C122.686 55.4286 123 56.8429 123.629 57.7857C124.286 58.7286 125.214 59.2 126.414 59.2C127.414 59.2 128.2 59.0143 128.771 58.6429C129.371 58.2714 129.729 58.0143 129.843 57.8714L133.229 64.5143C133.057 64.6857 132.557 64.9714 131.729 65.3714C130.9 65.7714 129.829 66.1429 128.514 66.4857C127.2 66.8286 125.7 67 124.014 67C121.043 67 118.557 66.1143 116.557 64.3429C114.586 62.5714 113.6 59.8 113.6 56.0286V38.5H107V30.7857ZM167.156 65.9714V59.4571C166.928 60.1429 166.27 61.0857 165.185 62.2857C164.128 63.4857 162.67 64.5714 160.813 65.5429C158.985 66.5143 156.813 67 154.299 67C151.013 67 148.056 66.2143 145.428 64.6429C142.799 63.0714 140.728 60.8857 139.213 58.0857C137.699 55.2857 136.942 52.0571 136.942 48.4C136.942 44.7429 137.699 41.5143 139.213 38.7143C140.728 35.9143 142.799 33.7286 145.428 32.1571C148.056 30.5571 151.013 29.7571 154.299 29.7571C156.756 29.7571 158.885 30.1857 160.685 31.0429C162.485 31.9 163.928 32.8857 165.013 34C166.128 35.1143 166.813 36.0857 167.07 36.9143V30.7857H176.156V65.9714H167.156ZM145.985 48.4C145.985 50.6571 146.485 52.6286 147.485 54.3143C148.485 56 149.785 57.3 151.385 58.2143C153.013 59.1286 154.756 59.5857 156.613 59.5857C158.613 59.5857 160.385 59.1143 161.928 58.1714C163.499 57.2286 164.728 55.9286 165.613 54.2714C166.528 52.5857 166.985 50.6286 166.985 48.4C166.985 46.1714 166.528 44.2286 165.613 42.5714C164.728 40.8857 163.499 39.5714 161.928 38.6286C160.385 37.6571 158.613 37.1714 156.613 37.1714C154.756 37.1714 153.013 37.6429 151.385 38.5857C149.785 39.5 148.485 40.8 147.485 42.4857C146.485 44.1714 145.985 46.1429 145.985 48.4ZM186.271 65.9714V30.7857H195.4V65.9714H186.271ZM190.943 20.2429C189.4 20.2429 188.071 19.6857 186.957 18.5714C185.871 17.4571 185.329 16.1286 185.329 14.5857C185.329 13.0429 185.871 11.7143 186.957 10.6C188.071 9.45714 189.4 8.88571 190.943 8.88571C191.971 8.88571 192.914 9.15714 193.771 9.7C194.657 10.2143 195.357 10.9 195.871 11.7571C196.414 12.5857 196.686 13.5286 196.686 14.5857C196.686 16.1286 196.129 17.4571 195.014 18.5714C193.9 19.6857 192.543 20.2429 190.943 20.2429ZM215.437 65.9714H206.222V7H215.437V65.9714ZM234.044 48.0571C234.044 51.4857 234.744 54.2143 236.144 56.2429C237.572 58.2714 239.815 59.2857 242.872 59.2857C245.958 59.2857 248.201 58.2714 249.601 56.2429C251.001 54.2143 251.701 51.4857 251.701 48.0571V30.7857H260.787V49.2143C260.787 52.7571 260.087 55.8714 258.687 58.5571C257.287 61.2143 255.258 63.2857 252.601 64.7714C249.944 66.2571 246.701 67 242.872 67C239.072 67 235.844 66.2571 233.187 64.7714C230.53 63.2857 228.501 61.2143 227.101 58.5571C225.701 55.8714 225.001 52.7571 225.001 49.2143V30.7857H234.044V48.0571ZM284.016 29.7571C285.988 29.7571 287.816 29.9429 289.502 30.3143C291.188 30.6857 292.631 31.1286 293.831 31.6429C295.031 32.1571 295.859 32.5857 296.316 32.9286L292.973 38.5857C292.402 38.1 291.373 37.5429 289.888 36.9143C288.431 36.2857 286.788 35.9714 284.959 35.9714C283.131 35.9714 281.588 36.3 280.331 36.9571C279.073 37.6143 278.445 38.6 278.445 39.9143C278.445 41.2 279.102 42.2286 280.416 43C281.759 43.7714 283.573 44.4143 285.859 44.9286C287.745 45.3571 289.545 45.9571 291.259 46.7286C292.973 47.4714 294.373 48.5429 295.459 49.9429C296.573 51.3143 297.131 53.1571 297.131 55.4714C297.131 57.6714 296.659 59.5143 295.716 61C294.802 62.4571 293.573 63.6286 292.031 64.5143C290.488 65.4 288.773 66.0286 286.888 66.4C285.031 66.8 283.159 67 281.273 67C278.959 67 276.888 66.7714 275.059 66.3143C273.259 65.8571 271.759 65.3286 270.559 64.7286C269.359 64.1 268.502 63.5714 267.988 63.1429L271.331 56.8C272.073 57.5143 273.288 58.2714 274.973 59.0714C276.659 59.8429 278.545 60.2286 280.631 60.2286C282.859 60.2286 284.645 59.8 285.988 58.9429C287.331 58.0857 288.002 56.9429 288.002 55.5143C288.002 54.4571 287.673 53.6 287.016 52.9429C286.388 52.2857 285.516 51.7571 284.402 51.3571C283.288 50.9571 282.045 50.6 280.673 50.2857C279.388 49.9714 278.088 49.5714 276.773 49.0857C275.488 48.5714 274.302 47.9143 273.216 47.1143C272.131 46.2857 271.259 45.2571 270.602 44.0286C269.945 42.8 269.616 41.3571 269.616 39.7C269.616 37.5857 270.288 35.7857 271.631 34.3C272.973 32.8143 274.745 31.6857 276.945 30.9143C279.145 30.1429 281.502 29.7571 284.016 29.7571Z" fill="currentColor"></path>
                            <path d="M53.6523 31.5142C53.6523 28.5967 51.2872 26.2316 48.3697 26.2316C45.4522 26.2316 43.0871 28.5967 43.0871 31.5142C43.0871 34.4317 45.4522 36.7968 48.3697 36.7968C51.2872 36.7968 53.6523 34.4317 53.6523 31.5142Z" fill="currentColor"></path>
                            <path d="M42.6502 36.769C42.5195 36.7593 42.3875 36.7543 42.2543 36.7543C39.3572 36.7543 37.0087 39.1029 37.0087 42C37.0087 44.8971 39.3572 47.2457 42.2543 47.2457C45.1514 47.2457 47.5 44.8971 47.5 42C47.5 40.92 47.1736 39.9162 46.6141 39.0819C45.0637 38.7237 43.691 37.9013 42.6502 36.769Z" fill="currentColor"></path>
                            <path d="M34.8047 39.7898C34.5971 40.4904 34.4857 41.2322 34.4857 42C34.4857 42.7679 34.5971 43.5097 34.8047 44.2102C33.969 46.0163 32.1408 47.2693 30.02 47.2693C27.1098 47.2693 24.7507 44.9102 24.7507 42C24.7507 39.0899 27.1098 36.7308 30.02 36.7308C32.1408 36.7308 33.969 37.9837 34.8047 39.7898Z" fill="currentColor"></path>
                            <path d="M48.3708 47.2122C51.2834 47.2122 53.6445 49.5733 53.6445 52.4859C53.6445 55.3984 51.2834 57.7595 48.3708 57.7595C45.4583 57.7595 43.0971 55.3984 43.0971 52.4859C43.0971 51.4104 43.4191 50.4101 43.9718 49.5761C45.5507 49.2193 46.9472 48.3816 47.9994 47.225C48.1221 47.2165 48.246 47.2122 48.3708 47.2122Z" fill="currentColor"></path>
                            <path d="M59.7461 42C59.7461 39.0938 57.3901 36.7378 54.4838 36.7378C54.3567 36.7378 54.2306 36.7423 54.1057 36.7512C53.0573 37.8988 51.6691 38.7307 50.1003 39.0877C49.9504 39.3129 49.8173 39.5503 49.703 39.7982C49.909 40.4962 50.0195 41.2352 50.0195 42C50.0195 42.7648 49.909 43.5038 49.703 44.2019C49.8173 44.4497 49.9504 44.6872 50.1003 44.9124C51.6691 45.2694 53.0573 46.1013 54.1057 47.2489C54.2306 47.2578 54.3567 47.2623 54.4838 47.2623C57.3901 47.2623 59.7461 44.9063 59.7461 42Z" fill="currentColor"></path>
                            <path d="M40.6028 52.4859C40.6028 51.718 40.7143 50.9761 40.9219 50.2755C40.809 50.0315 40.678 49.7976 40.5306 49.5755C38.9544 49.2187 37.56 48.3825 36.5088 47.2283C36.3856 47.2197 36.2612 47.2153 36.1358 47.2153C36.0102 47.2153 35.8855 47.2197 35.7621 47.2284C34.7111 48.3823 33.317 49.2184 31.7411 49.5753C31.1877 50.4093 30.8653 51.4099 30.8653 52.4859C30.8653 55.3967 33.225 57.7564 36.1358 57.7564C38.2573 57.7564 40.0861 56.503 40.9219 54.6962C40.7143 53.9957 40.6028 53.2538 40.6028 52.4859Z" fill="currentColor"></path>
                            <path d="M40.5094 34.4263C40.6608 34.1992 40.795 33.9595 40.9102 33.7094C40.705 33.0126 40.595 32.2752 40.595 31.512C40.595 30.7489 40.705 30.0115 40.9102 29.3147C40.0777 27.5058 38.2492 26.25 36.1274 26.25C33.2213 26.25 30.8654 28.6059 30.8654 31.512C30.8654 32.5894 31.1892 33.5912 31.7448 34.4253C33.3117 34.7828 34.6983 35.6141 35.7457 36.7605C35.8718 36.7695 35.9991 36.7741 36.1274 36.7741C36.2572 36.7741 36.3858 36.7694 36.5132 36.7602C37.5596 35.615 38.9445 34.7843 40.5094 34.4263Z" fill="currentColor"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84ZM42 74.518C24.0408 74.518 9.48201 59.9592 9.48201 42C9.48201 24.0408 24.0408 9.48201 42 9.48201C59.9592 9.48201 74.518 24.0408 74.518 42C74.518 59.9592 59.9592 74.518 42 74.518Z" fill="currentColor"></path>
                        </svg>
                    </a>
                    <button id="menu-btn" aria-label="open menu" class="btn variant-ghost sz-md icon-only relative z-20 -mr-2.5 block cursor-pointer lg:hidden">
                        <svg class="text-title m-auto size-6 transition-[transform,opacity] duration-300 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
                        </svg>
                        <svg class="text-title absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 transition-[transform,opacity] duration-300 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div class="bg-ui mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-gray-300/20 group-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:group-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
                    <div class="lg:pr-4">
                        <ul class="space-y-6 text-base lg:flex lg:gap-6 lg:space-y-0 lg:text-sm">
                            <li>
                                <a href="#" class="text-body block hover:text-title">
                                    <span>Features</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-body block hover:text-title">
                                    <span>Solution</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-body block hover:text-title">
                                    <span>Pricing</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-body block hover:text-title">
                                    <span>About</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                        <a href="#" class="btn variant-soft sz-md lg:sz-xs">
                            <span>Login</span>
                        </a>
                        <a href="#" class="btn variant-neutral sz-md lg:sz-xs">
                            <span class="btn-label">Sign Up</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
<main>
    <section class="overflow-hidden">
        <svg class="absolute inset-0 z-[2] mx-auto w-full text-secondary-100 opacity-25 blur-3xl dark:text-white/5 dark:opacity-100" viewBox="0 0 807 355" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M496.5 210C632.9 186.8 760.33 60.333 807 0C764.17 84 654.8 263.1 560 307.5C465.2 351.9 147.167 356.667 0 353.5C108.667 315.333 360.1 233.2 496.5 210Z" fill="currentColor"></path>
        </svg>
        <svg class="absolute inset-0 z-[2] m-auto w-full text-primary-200 opacity-25 blur-3xl dark:text-primary-500/5 dark:opacity-100" viewBox="0 0 807 355" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M496.5 210C632.9 186.8 760.33 60.333 807 0C764.17 84 654.8 263.1 560 307.5C465.2 351.9 147.167 356.667 0 353.5C108.667 315.333 360.1 233.2 496.5 210Z" fill="currentColor"></path>
        </svg>
        <div class="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
            <div class="lg:flex lg:items-center lg:gap-12">
                <div class="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                    <a href="#" class="annonce variant-mixed sz-sm mx-auto w-fit gap-2 lg:ml-0">
                        <span class="annonce-concern sz-xs variant-neutral">New</span>
                        <span class="text-title text-sm">Introduction Tailus UI Html</span>
                        <span class="block h-4 w-px bg-[--ui-border-color]"></span>
                        <span class="text-sm text-primary-600 dark:text-primary-400">Read</span>
                    </a>
                    <h1 class="text-title mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">Production Ready Digital Marketing blocks</h1>
                    <p class="text-body mt-8">Error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
                    <div>
                        <form action="" class="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto">
                            <div class="bg-ui relative grid items-center rounded-[calc(var(--btn-radius)+0.75rem)] border pr-3 shadow shadow-gray-950/5 outline-2 outline-offset-2 outline-primary-600 [grid-template-columns:1fr_auto] has-[input:focus]:outline">
                                <svg class="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                                </svg>

                                <input autocomplete="email" placeholder="Your mail address" class="h-14 w-full bg-transparent pl-12 focus:outline-none" type="email" />
                                <div class="md:pr-1.5 lg:pr-0">
                                    <button title="Start buying" class="btn variant-primary sz-md w-fit">
                                        <span class="btn-label hidden md:block"> Get Started</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="relative mx-auto size-5 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ul class="flex list-inside list-disc items-center justify-center gap-2 lg:flex-col lg:items-start">
                            <li>Faster</li>
                            <li>Modern</li>
                            <li>100% Customizable</li>
                        </ul>
                    </div>
                </div>
                <div class="relative inset-x-0 right-6 mx-auto ml-auto mt-12 h-fit max-w-md [--ui-shadow-border:var(--ui-border-color)] lg:absolute lg:inset-y-16 lg:mr-0 lg:mt-0">
                    <Image class="bg-ui tls-shadow rounded-card relative z-10 p-0.5 shadow-gray-950/[0.05]" src={toolbar} alt="project illustration" />
                    <div class="absolute -inset-20 z-[1] bg-gradient-to-b from-gray-50 via-transparent to-gray-50 sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>
                    <div class="absolute -inset-20 z-[1] bg-gradient-to-r from-gray-50 via-transparent to-gray-50 sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>
                    <div data-shade="glassy" class="absolute -inset-20 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px] [--ui-border-color:theme(colors.primary.200)] sm:-inset-40 dark:[--ui-border-color:theme(colors.primary.500/0.25)]"></div>
                    <div class="before:bg-ui before:tls-shadow-lg relative z-10 mt-4 before:rounded-card before:absolute before:inset-x-2 before:-bottom-1.5 before:top-0 before:shadow-gray-950/[0.03]">
                        <div class="tls-shadow bg-ui rounded-card relative overflow-hidden shadow-gray-950/[0.05]">
                            <Image src={areaChart} alt="project illustration" />
                            <Image src={categoryChart} alt="project illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<script>
    let navbar = document.querySelector('#navbar') as HTMLElement
    let btn = document.querySelector('#menu-btn') as HTMLButtonElement

    btn.addEventListener('click', () => {
        navbar.dataset.state = navbar.dataset.state === 'active' ? '' : 'active'
    })
</script>`

const nextjsCode = `'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
import areaChart from './../public/blocks/ar.png'
import categoryChart from './../public/blocks/cat.png'
import toolbar from './../public/blocks/edit-bar.png'

export default function SaaS1() {
    const [menuState, setMenuState] = useState(false)
    return (
        <>
            <header>
                <nav data-state={menuState && 'active'} className="group fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative lg:bg-transparent dark:bg-gray-950/50">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                <Link href="/" aria-label="home" className="flex items-center space-x-2">
                                    <svg className="text-title h-7" height="28" viewBox="0 0 298 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M107 30.7857H113.6V16.3429H122.686V30.7857H131.386V38.5H122.686V53.5429C122.686 55.4286 123 56.8429 123.629 57.7857C124.286 58.7286 125.214 59.2 126.414 59.2C127.414 59.2 128.2 59.0143 128.771 58.6429C129.371 58.2714 129.729 58.0143 129.843 57.8714L133.229 64.5143C133.057 64.6857 132.557 64.9714 131.729 65.3714C130.9 65.7714 129.829 66.1429 128.514 66.4857C127.2 66.8286 125.7 67 124.014 67C121.043 67 118.557 66.1143 116.557 64.3429C114.586 62.5714 113.6 59.8 113.6 56.0286V38.5H107V30.7857ZM167.156 65.9714V59.4571C166.928 60.1429 166.27 61.0857 165.185 62.2857C164.128 63.4857 162.67 64.5714 160.813 65.5429C158.985 66.5143 156.813 67 154.299 67C151.013 67 148.056 66.2143 145.428 64.6429C142.799 63.0714 140.728 60.8857 139.213 58.0857C137.699 55.2857 136.942 52.0571 136.942 48.4C136.942 44.7429 137.699 41.5143 139.213 38.7143C140.728 35.9143 142.799 33.7286 145.428 32.1571C148.056 30.5571 151.013 29.7571 154.299 29.7571C156.756 29.7571 158.885 30.1857 160.685 31.0429C162.485 31.9 163.928 32.8857 165.013 34C166.128 35.1143 166.813 36.0857 167.07 36.9143V30.7857H176.156V65.9714H167.156ZM145.985 48.4C145.985 50.6571 146.485 52.6286 147.485 54.3143C148.485 56 149.785 57.3 151.385 58.2143C153.013 59.1286 154.756 59.5857 156.613 59.5857C158.613 59.5857 160.385 59.1143 161.928 58.1714C163.499 57.2286 164.728 55.9286 165.613 54.2714C166.528 52.5857 166.985 50.6286 166.985 48.4C166.985 46.1714 166.528 44.2286 165.613 42.5714C164.728 40.8857 163.499 39.5714 161.928 38.6286C160.385 37.6571 158.613 37.1714 156.613 37.1714C154.756 37.1714 153.013 37.6429 151.385 38.5857C149.785 39.5 148.485 40.8 147.485 42.4857C146.485 44.1714 145.985 46.1429 145.985 48.4ZM186.271 65.9714V30.7857H195.4V65.9714H186.271ZM190.943 20.2429C189.4 20.2429 188.071 19.6857 186.957 18.5714C185.871 17.4571 185.329 16.1286 185.329 14.5857C185.329 13.0429 185.871 11.7143 186.957 10.6C188.071 9.45714 189.4 8.88571 190.943 8.88571C191.971 8.88571 192.914 9.15714 193.771 9.7C194.657 10.2143 195.357 10.9 195.871 11.7571C196.414 12.5857 196.686 13.5286 196.686 14.5857C196.686 16.1286 196.129 17.4571 195.014 18.5714C193.9 19.6857 192.543 20.2429 190.943 20.2429ZM215.437 65.9714H206.222V7H215.437V65.9714ZM234.044 48.0571C234.044 51.4857 234.744 54.2143 236.144 56.2429C237.572 58.2714 239.815 59.2857 242.872 59.2857C245.958 59.2857 248.201 58.2714 249.601 56.2429C251.001 54.2143 251.701 51.4857 251.701 48.0571V30.7857H260.787V49.2143C260.787 52.7571 260.087 55.8714 258.687 58.5571C257.287 61.2143 255.258 63.2857 252.601 64.7714C249.944 66.2571 246.701 67 242.872 67C239.072 67 235.844 66.2571 233.187 64.7714C230.53 63.2857 228.501 61.2143 227.101 58.5571C225.701 55.8714 225.001 52.7571 225.001 49.2143V30.7857H234.044V48.0571ZM284.016 29.7571C285.988 29.7571 287.816 29.9429 289.502 30.3143C291.188 30.6857 292.631 31.1286 293.831 31.6429C295.031 32.1571 295.859 32.5857 296.316 32.9286L292.973 38.5857C292.402 38.1 291.373 37.5429 289.888 36.9143C288.431 36.2857 286.788 35.9714 284.959 35.9714C283.131 35.9714 281.588 36.3 280.331 36.9571C279.073 37.6143 278.445 38.6 278.445 39.9143C278.445 41.2 279.102 42.2286 280.416 43C281.759 43.7714 283.573 44.4143 285.859 44.9286C287.745 45.3571 289.545 45.9571 291.259 46.7286C292.973 47.4714 294.373 48.5429 295.459 49.9429C296.573 51.3143 297.131 53.1571 297.131 55.4714C297.131 57.6714 296.659 59.5143 295.716 61C294.802 62.4571 293.573 63.6286 292.031 64.5143C290.488 65.4 288.773 66.0286 286.888 66.4C285.031 66.8 283.159 67 281.273 67C278.959 67 276.888 66.7714 275.059 66.3143C273.259 65.8571 271.759 65.3286 270.559 64.7286C269.359 64.1 268.502 63.5714 267.988 63.1429L271.331 56.8C272.073 57.5143 273.288 58.2714 274.973 59.0714C276.659 59.8429 278.545 60.2286 280.631 60.2286C282.859 60.2286 284.645 59.8 285.988 58.9429C287.331 58.0857 288.002 56.9429 288.002 55.5143C288.002 54.4571 287.673 53.6 287.016 52.9429C286.388 52.2857 285.516 51.7571 284.402 51.3571C283.288 50.9571 282.045 50.6 280.673 50.2857C279.388 49.9714 278.088 49.5714 276.773 49.0857C275.488 48.5714 274.302 47.9143 273.216 47.1143C272.131 46.2857 271.259 45.2571 270.602 44.0286C269.945 42.8 269.616 41.3571 269.616 39.7C269.616 37.5857 270.288 35.7857 271.631 34.3C272.973 32.8143 274.745 31.6857 276.945 30.9143C279.145 30.1429 281.502 29.7571 284.016 29.7571Z"
                                            fill="currentColor"></path>
                                        <path d="M53.6523 31.5142C53.6523 28.5967 51.2872 26.2316 48.3697 26.2316C45.4522 26.2316 43.0871 28.5967 43.0871 31.5142C43.0871 34.4317 45.4522 36.7968 48.3697 36.7968C51.2872 36.7968 53.6523 34.4317 53.6523 31.5142Z" fill="currentColor"></path>
                                        <path d="M42.6502 36.769C42.5195 36.7593 42.3875 36.7543 42.2543 36.7543C39.3572 36.7543 37.0087 39.1029 37.0087 42C37.0087 44.8971 39.3572 47.2457 42.2543 47.2457C45.1514 47.2457 47.5 44.8971 47.5 42C47.5 40.92 47.1736 39.9162 46.6141 39.0819C45.0637 38.7237 43.691 37.9013 42.6502 36.769Z" fill="currentColor"></path>
                                        <path d="M34.8047 39.7898C34.5971 40.4904 34.4857 41.2322 34.4857 42C34.4857 42.7679 34.5971 43.5097 34.8047 44.2102C33.969 46.0163 32.1408 47.2693 30.02 47.2693C27.1098 47.2693 24.7507 44.9102 24.7507 42C24.7507 39.0899 27.1098 36.7308 30.02 36.7308C32.1408 36.7308 33.969 37.9837 34.8047 39.7898Z" fill="currentColor"></path>
                                        <path d="M48.3708 47.2122C51.2834 47.2122 53.6445 49.5733 53.6445 52.4859C53.6445 55.3984 51.2834 57.7595 48.3708 57.7595C45.4583 57.7595 43.0971 55.3984 43.0971 52.4859C43.0971 51.4104 43.4191 50.4101 43.9718 49.5761C45.5507 49.2193 46.9472 48.3816 47.9994 47.225C48.1221 47.2165 48.246 47.2122 48.3708 47.2122Z" fill="currentColor"></path>
                                        <path
                                            d="M59.7461 42C59.7461 39.0938 57.3901 36.7378 54.4838 36.7378C54.3567 36.7378 54.2306 36.7423 54.1057 36.7512C53.0573 37.8988 51.6691 38.7307 50.1003 39.0877C49.9504 39.3129 49.8173 39.5503 49.703 39.7982C49.909 40.4962 50.0195 41.2352 50.0195 42C50.0195 42.7648 49.909 43.5038 49.703 44.2019C49.8173 44.4497 49.9504 44.6872 50.1003 44.9124C51.6691 45.2694 53.0573 46.1013 54.1057 47.2489C54.2306 47.2578 54.3567 47.2623 54.4838 47.2623C57.3901 47.2623 59.7461 44.9063 59.7461 42Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M40.6028 52.4859C40.6028 51.718 40.7143 50.9761 40.9219 50.2755C40.809 50.0315 40.678 49.7976 40.5306 49.5755C38.9544 49.2187 37.56 48.3825 36.5088 47.2283C36.3856 47.2197 36.2612 47.2153 36.1358 47.2153C36.0102 47.2153 35.8855 47.2197 35.7621 47.2284C34.7111 48.3823 33.317 49.2184 31.7411 49.5753C31.1877 50.4093 30.8653 51.4099 30.8653 52.4859C30.8653 55.3967 33.225 57.7564 36.1358 57.7564C38.2573 57.7564 40.0861 56.503 40.9219 54.6962C40.7143 53.9957 40.6028 53.2538 40.6028 52.4859Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M40.5094 34.4263C40.6608 34.1992 40.795 33.9595 40.9102 33.7094C40.705 33.0126 40.595 32.2752 40.595 31.512C40.595 30.7489 40.705 30.0115 40.9102 29.3147C40.0777 27.5058 38.2492 26.25 36.1274 26.25C33.2213 26.25 30.8654 28.6059 30.8654 31.512C30.8654 32.5894 31.1892 33.5912 31.7448 34.4253C33.3117 34.7828 34.6983 35.6141 35.7457 36.7605C35.8718 36.7695 35.9991 36.7741 36.1274 36.7741C36.2572 36.7741 36.3858 36.7694 36.5132 36.7602C37.5596 35.615 38.9445 34.7843 40.5094 34.4263Z"
                                            fill="currentColor"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84ZM42 74.518C24.0408 74.518 9.48201 59.9592 9.48201 42C9.48201 24.0408 24.0408 9.48201 42 9.48201C59.9592 9.48201 74.518 24.0408 74.518 42C74.518 59.9592 59.9592 74.518 42 74.518Z" fill="currentColor"></path>
                                    </svg>
                                </Link>
                                <button onClick={() => setMenuState(!menuState)} aria-label={menuState == true ? 'Close Menu' : 'Open Menu'} className="btn variant-ghost sz-md icon-only relative z-20 -mr-2.5 block cursor-pointer lg:hidden">
                                    <svg className="text-title m-auto size-6 transition-[transform,opacity] duration-300 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                    <svg className="text-title absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 transition-[transform,opacity] duration-300 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="bg-ui mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-gray-300/20 group-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:group-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
                                <div className="lg:pr-4">
                                    <ul className="space-y-6 text-base lg:flex lg:gap-6 lg:space-y-0 lg:text-sm">
                                        <li>
                                            <Link href="#" className="text-body block hover:text-title">
                                                <span>Features</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-body block hover:text-title">
                                                <span>Solution</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-body block hover:text-title">
                                                <span>Pricing</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-body block hover:text-title">
                                                <span>About</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                                    <Link href="#" className="btn variant-soft sz-md lg:sz-xs">
                                        <span>Login</span>
                                    </Link>
                                    <Link href="#" className="btn variant-neutral sz-md lg:sz-xs">
                                        <span className="btn-label">Sign Up</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <section className="overflow-hidden">
                    <svg className="absolute inset-0 z-[2] mx-auto w-full text-purple-100 opacity-25 blur-3xl dark:text-white/5 dark:opacity-100" viewBox="0 0 807 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M496.5 210C632.9 186.8 760.33 60.333 807 0C764.17 84 654.8 263.1 560 307.5C465.2 351.9 147.167 356.667 0 353.5C108.667 315.333 360.1 233.2 496.5 210Z" fill="currentColor"></path>
                    </svg>
                    <svg className="absolute inset-0 z-[2] m-auto w-full text-primary-200 opacity-25 blur-3xl dark:text-primary-500/5 dark:opacity-100" viewBox="0 0 807 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M496.5 210C632.9 186.8 760.33 60.333 807 0C764.17 84 654.8 263.1 560 307.5C465.2 351.9 147.167 356.667 0 353.5C108.667 315.333 360.1 233.2 496.5 210Z" fill="currentColor"></path>
                    </svg>
                    <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
                        <div className="lg:flex lg:items-center lg:gap-12">
                            <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <a href="/" className="annonce variant-mixed sz-sm mx-auto w-fit gap-2 lg:ml-0">
                                    <span className="annonce-concern sz-xs variant-neutral">New</span>
                                    <span className="text-title text-sm">Introduction Tailus UI Html</span>
                                    <span className="block h-4 w-px bg-[--ui-border-color]"></span>
                                    <span className="text-sm text-primary-600 dark:text-primary-400">Read</span>
                                </a>
                                <h1 className="text-title mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">Production Ready Digital Marketing blocks</h1>
                                <p className="text-body mt-8">Error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
                                <div>
                                    <form action="" className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto">
                                        <div className="bg-ui relative grid items-center rounded-[calc(var(--btn-radius)+0.75rem)] border pr-3 shadow shadow-gray-950/5 outline-2 outline-offset-2 outline-primary-600 [grid-template-columns:1fr_auto] has-[input:focus]:outline">
                                            <svg className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>

                                            <input placeholder="Your mail address" className="h-14 w-full bg-transparent pl-12 focus:outline-none" type="email" />
                                            <div className="md:pr-1.5 lg:pr-0">
                                                <button title="Start buying" className="btn variant-primary sz-md w-fit">
                                                    <span className="btn-label hidden md:block">Get Started</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="relative mx-auto size-5 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <ul className="flex list-inside list-disc items-center justify-center gap-2 lg:flex-col lg:items-start">
                                        <li>Faster</li>
                                        <li>Modern</li>
                                        <li>100% Customizable</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative inset-x-0 right-6 mx-auto ml-auto mt-12 h-fit max-w-md [--ui-shadow-border:var(--ui-border-color)] lg:absolute lg:inset-y-16 lg:mr-0 lg:mt-0">
                                <Image src={toolbar} className="bg-ui tls-shadow rounded-card relative z-10 p-0.5 shadow-gray-950/[0.05]" alt="project illustration" />
                                <div className="absolute -inset-20 z-[1] bg-gradient-to-b from-gray-50 via-transparent to-gray-50 sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>
                                <div className="absolute -inset-20 z-[1] bg-gradient-to-r from-gray-50 via-transparent to-gray-50 sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>
                                <div data-shade="glassy" className="absolute -inset-20 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px] [--ui-border-color:theme(colors.primary.200)] sm:-inset-40 dark:[--ui-border-color:theme(colors.primary.500/0.25)]"></div>
                                <div className="before:bg-ui before:tls-shadow-lg relative z-10 mt-4 before:rounded-card before:absolute before:inset-x-2 before:-bottom-1.5 before:top-0 before:shadow-gray-950/[0.03]">
                                    <div className="tls-shadow bg-ui rounded-card relative overflow-hidden shadow-gray-950/[0.05]">
                                        <Image src={areaChart} alt="project illustration" />
                                        <Image src={categoryChart} alt="project illustration" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}`

const nuxtjsCode = `Coming very soon!`

export const hero1Code: Code = {
    html: htmlCode,
    astro: astroCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}