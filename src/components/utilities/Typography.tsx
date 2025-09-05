import { twMerge } from 'tailwind-merge';

export const HeadingOne = ({ children, id }) => {
    return (
        <h1 id={id} className="mt-3 !mb-1 scroll-my-2 text-xl font-semibold text-[var(--title-text-color)] sm:text-2xl">
            {children}
        </h1>
    );
};

export const HeadingTwo = ({ children, id }) => {
    return (
        <h2 id={id} className="scroll-my-32 text-lg font-medium text-[var(--title-text-color)]">
            {children}
        </h2>
    );
};

export const HeadingThree = ({ children, id, className = '' }) => {
    return (
        <h3 id={id} className={twMerge('mt-2 !mb-3 scroll-my-32 text-base font-medium text-[#b4b4b4]', className)}>
            {children}
        </h3>
    );
};

export const HeadingFour = ({ children, id }) => {
    return (
        <h4 id={id} className="scroll-my-32 text-base font-medium text-[--title-text-color]">
            {children}
        </h4>
    );
};

export const HeadingFive = ({ children, id }) => {
    return (
        <h5 id={id} className="mb-8 mt-4 scroll-my-32 text-base font-medium text-[--title-text-color]">
            {children}
        </h5>
    );
};

export const HeadingSix = ({ children, id }) => {
    return (
        <h6 id={id} className="mb-8 mt-4 scroll-my-32 text-base font-medium text-[--title-text-color]">
            {children}
        </h6>
    );
};

export const Paragraph = ({ children, props }) => {
    return (
        <p {...props} className="mb-8 mt-4 text-[17px] text-gray-700 dark:text-gray-300">
            {children}
        </p>
    );
};
