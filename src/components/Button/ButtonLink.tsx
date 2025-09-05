import { cva, type VariantProps } from 'class-variance-authority'
import { GoTopRightIcon } from '../utilities/icons'
import { twMerge } from 'tailwind-merge'

const linkVariants = cva(['relative text-primary-600 dark:text-primary-400 transition duration-200 before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-primary-500/20 dark:before:bg-primary-400/20 before:scale-x-0 before:origin-right hover:before:origin-left hover:before:scale-x-100 before:transition before:duration-200'], {
    variants: {
        size: {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
    to: string
    label: string
    target?: boolean
}

export const Link: React.FC<LinkProps> = ({ className, target, size, label, children, to, ...props }) => {
    return (
        <a href={to} target={target && '_blank'} className={twMerge(linkVariants({ size, className }), target && 'group flex items-center gap-0.5')} {...props}>
            {label}
            {children}
            {target ? <GoTopRightIcon className="size-3.5 text-primary-600 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-primary-600 dark:text-primary-400 dark:group-hover:text-primary-400" /> : ''}
        </a>
    )
}

Link.defaultProps = {
    size: 'md',
}

export default Link
