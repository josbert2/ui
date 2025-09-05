import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { isOpen, setIsOpen } from '../store/search';
import { twMerge } from 'tailwind-merge';

const Search = ({ children }) => {
    const $isOpen = useStore(isOpen);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.metaKey && event.key === 'k') {
                setIsOpen();
            }
            if ($isOpen && event.key === 'Escape') {
                setIsOpen();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [$isOpen]);

    useEffect(() => {
        if ($isOpen) {
            document.body.classList.add('overflow-hidden');
            document.querySelector('main')?.classList.remove('z-[1]');
        } else {
            document.body.classList.remove('overflow-hidden');
            document.querySelector('main')?.classList.add('z-[1]');
        }
    }, [$isOpen]);

    return (
        <>
            <div onClick={setIsOpen} className={twMerge('invisible fixed inset-0 z-[100] h-full w-full bg-white/75 opacity-0 transition-all duration-300 dark:bg-[--overlay-bg]', $isOpen && 'visible block opacity-100')} aria-hidden="true" />
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Search"
                aria-description="Search the site"
                data-shade="glassy"
                className={twMerge('feedback-shadow feedback-bg fancy-border invisible fixed inset-0 inset-x-4 top-20 z-[101] mx-auto h-min max-h-[40rem] min-h-0 origin-bottom translate-y-4 scale-95 overflow-hidden rounded-[--card-radius] opacity-0 transition-[shadow,opacity,transform] duration-300 md:inset-x-0 md:w-full md:max-w-2xl dark:bg-gray-800/75 dark:shadow-xl dark:shadow-gray-950/35', $isOpen && 'visible translate-y-0 scale-100 opacity-100')}>
                {children}
            </div>
        </>
    );
};

export default Search;
