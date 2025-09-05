import { SearchIcon } from './../utilities/icons'
import { setIsOpen, isOpen } from '@store/search'
import { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { Kbd } from '@tailus-ui/typography'

const SearchButton = () => {
    const $isOpen = useStore(isOpen)

    useEffect(() => {
        if ($isOpen) {
            setTimeout(() => {
                const searchInput = document.querySelector('#search')?.querySelector('input') as HTMLInputElement
                searchInput && searchInput.focus()
            }, 50)
        }
    }, [$isOpen])

    return (
        <button onClick={setIsOpen} className={`group relative flex h-9 w-9 items-center justify-center gap-3 rounded-[--btn-radius] bg-white backdrop-blur-2xl hover:brightness-105 lg:w-fit lg:justify-between lg:border lg:px-2 dark:bg-transparent lg:dark:bg-gray-900`} aria-label="open search">
            <div className="flex items-center gap-1.5">
                <SearchIcon className="size-4 text-gray-600 dark:text-gray-400" />
                <span className="hidden text-sm text-gray-700 lg:block dark:text-gray-300">Search...</span>
            </div>
            <div className="-mr-px hidden h-7 lg:block">
                <Kbd className="rounded-full">⌘K</Kbd>
            </div>
        </button>
    )
}

export default SearchButton
