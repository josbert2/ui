import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme";
import { animations, components, palette, shade } from "@tailus/themer";
import containerQueries from '@tailwindcss/container-queries'
import { withTV } from 'tailwind-variants/transformer';

module.exports = withTV({
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		 "./node_modules/@tailus/themer/dist/components/**/*.{js,ts}",
	],
	darkMode: "selector",
	safelist : ["dark:from-gray-950"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				mono: ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
			},
			keyframes: {
                inTooltip: {
                    from: { scale: "0.75", opacity: "0" },
                    to: { scale: "1", opacity: "1" },
                },
            },
            animation: {
                inTooltip: "inTooltip 200ms cubic-bezier(0.87, 0, 0.13, 1)",
            },
		}
	},
	plugins: [
		components,
		shade,
		palette,
		animations,
		containerQueries,
	],
}) satisfies Config;
