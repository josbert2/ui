import React from 'react';
import { ReactIcon, AstroIcon, SvelteIcon, VueIcon, NuxtIcon, NextIcon } from './icons';
import { Text } from '@tailus-ui/typography';
import { twMerge } from 'tailwind-merge';

interface BoilerplateCardProps {
    href?: 'string';
    isBlank?: boolean;
    framework: 'react' | 'astro' | 'vue' | 'next' | 'nuxt' | 'svelteKit' | 'remix' | 'vite' | 'laravel' | 'gatsby';
}

const RemixIcon = () => (
    <svg className="mx-auto size-12 text-[--title-text-color]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M21.511 18.508c.216 2.773.216 4.073.216 5.492H15.31c0-.309.006-.592.011-.878c.018-.892.036-1.821-.109-3.698c-.19-2.747-1.374-3.358-3.55-3.358H1.574v-5H11.97c2.748 0 4.122-.835 4.122-3.049c0-1.946-1.374-3.125-4.122-3.125H1.573V0h11.541c6.221 0 9.313 2.938 9.313 7.632c0 3.511-2.176 5.8-5.114 6.182c2.48.497 3.93 1.909 4.198 4.694M1.573 24v-3.727h6.784c1.133 0 1.379.84 1.379 1.342V24Z" />
    </svg>
);

const ViteIcon = () => (
    <svg className="mx-auto size-12 text-[--title-text-color]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 257">
        <defs>
            <linearGradient id="logosVitejs0" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
                <stop offset="0%" stopColor="#41d1ff" />
                <stop offset="100%" stopColor="#bd34fe" />
            </linearGradient>
            <linearGradient id="logosVitejs1" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
                <stop offset="0%" stopColor="#ffea83" />
                <stop offset="8.333%" stopColor="#ffdd35" />
                <stop offset="100%" stopColor="#ffa800" />
            </linearGradient>
        </defs>
        <path fill="url(#logosVitejs0)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62" />
        <path fill="url(#logosVitejs1)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113" />
    </svg>
);

const LaravelIcon = () => (
    <svg className="mx-auto size-12 text-[--title-text-color]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M21.7 6.53c.01.02.01.05.01.08v4.29c0 .1-.06.22-.15.27l-3.61 2.08v4.11c0 .11-.05.21-.15.27l-7.52 4.33c-.02.01-.04.04-.06.04H10s0-.03-.04-.04l-7.52-4.33a.32.32 0 0 1-.15-.27V4.5c0-.05 0-.08.01-.1c0-.01.01-.02.01-.03c0-.02.01-.03.02-.05c0-.01.01-.02.02-.03l.03-.03l.03-.03c.01-.01.02-.02.03-.02L6.2 2.04c.1-.04.22-.04.3 0l3.78 2.17c.01.01.02.01.03.02l.03.03l.03.03c.01.01.02.02.02.03c.01.02.02.03.02.05c0 .01.01.02.01.03c.01.03.01.05.01.1v8l3.14-1.78V6.61c0-.03 0-.06.01-.08l.01-.03s.01-.03.02-.05c0-.01.01-.02.02-.03l.03-.03l.03-.03c.01-.01.02-.02.03-.02l3.78-2.17c.08-.06.2-.06.3 0l3.76 2.17c.01 0 .02.01.03.02l.03.03l.03.03c.01.01.01.02.02.03c.01.02.01.05.02.05s.01 0 .01.03m-.61 4.19V7.15l-3.14 1.8v3.55zm-3.76 6.46V13.6l-6.9 3.94v3.61zM2.91 5v12.18l6.9 3.97v-3.61l-3.6-2.04H6.2c-.01 0-.02 0-.03-.03c-.01 0-.02-.01-.03-.02l-.03-.03c-.01-.01-.01-.02-.02-.03c-.01-.02-.01-.03-.02-.04c0-.02-.01-.03-.01-.04c-.01-.01-.01-.03-.01-.04V6.82zm3.45-2.32L3.23 4.5l3.13 1.78L9.5 4.5zm3.45 10.2V5L6.67 6.82v7.87zm7.83-8.08L14.5 6.61l3.14 1.8l3.13-1.8zm-.31 4.15l-3.14-1.8v3.57l3.14 1.78zM10.12 17L17 13.06l-3.12-1.8L7 15.23z"
        />
    </svg>
);

const GatsbyIcon = () => (
    <svg className="mx-auto size-12 text-[--title-text-color]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 0 1-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.96 7.96 0 0 0 12 4m-8 8a8 8 0 0 0 8 8c.04 0 .09 0-8-8" />
    </svg>
);

const BoilerplateCard: React.FC<BoilerplateCardProps> = ({ href, isBlank, framework }) => {
    const iconClasses = 'size-14 m-auto';

    return (
        <a className="card-shadow rounded-[--card-radius] border bg-[--ui-bg] p-[--card-padding] transition-[box-shadow] duration-300 [--card-shadow-opacity:0] hover:[--card-shadow-opacity:0.05] dark:[--card-shadow-opacity:0.25] dark:hover:[--card-shadow-opacity:0.5]" href={href} target={isBlank && '_blank'}>
            {framework === 'react' && <ReactIcon className={twMerge(iconClasses, 'h-12 w-12')} />}
            {framework === 'astro' && <AstroIcon className={twMerge(iconClasses, 'h-12 w-12')} />}
            {framework === 'svelteKit' && <SvelteIcon className={twMerge(iconClasses, 'h-12 w-12')} />}
            {framework === 'vue' && <VueIcon className={twMerge(iconClasses, 'h-12 w-12')} />}
            {framework === 'next' && <NextIcon className={twMerge(iconClasses, 'h-12 w-12')} />}
            {framework === 'nuxt' && <NuxtIcon className={twMerge(iconClasses, 'h-12 w-12')} />}
            {framework === 'remix' && <RemixIcon />}
            {framework === 'vite' && <ViteIcon />}
            {framework === 'laravel' && <LaravelIcon />}
            {framework === 'gatsby' && <GatsbyIcon />}
            <Text neutral weight="medium" size="lg" className="mb-0 mt-3 capitalize" align="center">
                {framework}
            </Text>
        </a>
    );
};

export default BoilerplateCard;
