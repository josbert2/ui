import { twMerge } from 'tailwind-merge';
import { TailwindIcon, TSIcon, JSIcon, ReactIcon, SvelteIcon, VueIcon, TerminalIcon, AstroIcon, ViteIcon, JsonIcon, SvgIcon, CssIcon } from './icons';

export type FileType = 'ts' | 'js' | 'tsx' | 'jsx' | 'svelte' | 'vue' | 'terminal' | 'bash' | 'tailwind' | 'react' | 'astro' | 'vite' | 'json' | 'css' | 'svg' | 'css';

export interface FileProps extends React.HTMLAttributes<HTMLModElement> {
    file: FileType;
}

export const File: React.FC<FileProps> = ({ className, children, file, ...props }) => {
    return {
        ts: <TSIcon className={twMerge(className)} {...props} />,
        js: <JSIcon className={twMerge(className)} {...props} />,
        tsx: <ReactIcon className={twMerge(className)} {...props} />,
        jsx: <ReactIcon className={twMerge(className)} {...props} />,
        react: <ReactIcon className={twMerge(className)} {...props} />,
        svelte: <SvelteIcon className={twMerge(className)} {...props} />,
        vue: <VueIcon className={twMerge(className)} {...props} />,
        terminal: <TerminalIcon className={twMerge(className)} {...props} />,
        bash: <TerminalIcon className={twMerge(className)} {...props} />,
        tailwind: <TailwindIcon className={twMerge(className)} {...props} />,
        astro: <AstroIcon className={twMerge('size-4 text-white', className)} {...props} />,
        vite: <ViteIcon className={twMerge(className)} {...props} />,
        json: <JsonIcon className={twMerge(className)} {...props} />,
        svg: <SvgIcon className={twMerge(className)} {...props} />,
        css: <CssIcon className={twMerge(className)} {...props} />
    }[file];
};

export default File;
