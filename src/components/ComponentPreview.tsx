import type { ReactNode } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import prettier from 'prettier';

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLModElement> {
    children: ReactNode;
    className?: string;
    code?: string; // texto de código como string
    language?: string; // lenguaje opcional
    component?: ReactNode;
}


export const ComponentPreview: React.FC<ComponentPreviewProps> = ({ children, className, code, language = 'tsx', component }) => {
 

    return (
        <>
            <div className={twMerge('relative flex aspect-auto min-h-32 items-center justify-center rounded-[--card-radius] border  p-2 sm:mx-0 sm:min-h-56 sm:p-12 dark:bg-gray-925', className)}>{children}</div>
        </>
    );
};

export default ComponentPreview;
