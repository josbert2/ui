import { twMerge } from 'tailwind-merge'

type Badge = 'new' | 'updated' | 'preview' | 'deprecated'

export default function DocsBadge({ badge }: { badge: Badge }) {
    return <span className={twMerge('badge sz-xs -mb-px !py-px capitalize', badge == 'new' && 'variant-success', badge == 'updated' && 'variant-info', badge == 'preview' && 'variant-warning', badge == 'deprecated' && 'variant-danger')}>{badge}</span>
}
