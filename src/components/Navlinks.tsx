import * as NavMenu from '@radix-ui/react-navigation-menu';
import { Title, Caption } from './tailus-ui/typography';
import { ArrowRight, ChevronDown, LayoutDashboard, Megaphone, RectangleEllipsis, ShoppingBag } from 'lucide-react';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export const Navlinks = ({ isActive }) => (
    <NavMenu.Root delayDuration={100}>
        <NavMenu.List className="flex items-center gap-4">
            <NavMenu.Item>
                <NavMenu.Trigger asChild className={twMerge('group flex items-center gap-2 rounded-full px-3 py-1 text-sm text-[--body-text-color] hover:bg-gray-100 data-[state=open]:bg-[--ui-soft-bg] dark:hover:bg-gray-500/10', isActive && 'bg-[--ui-soft-bg]')}>
                    <a href="/examples">
                        Examples
                        <ChevronDown className="size-3 text-[--caption-text-color] transition-transform ease-in group-data-[state=open]:-rotate-180" />
                    </a>
                </NavMenu.Trigger>
                <NavMenu.Content data-rounded="xlarge" data-shade="925" className="z-50 max-w-xs space-y-1 rounded-[--card-radius] border bg-white p-0.5 dark:bg-gray-900">
                    <ContentLink label="Application" to="/examples/application" description="Modern application layouts">
                        <LayoutDashboard className="size-4" />
                    </ContentLink>
                    <ContentLink label="Marketing" to="/examples/marketing" description="Marketing blocks examples including herosections">
                        <Megaphone className="size-4" />
                    </ContentLink>
                    <ContentLink label="Ecommerce" to="/examples/ecommerce" description="Ecommerce block examples">
                        <ShoppingBag className="size-4" />
                    </ContentLink>
                    <ContentLink label="Forms" to="/examples/forms" description="Login and Sign Up page examples">
                        <RectangleEllipsis className="size-4" />
                    </ContentLink>
                </NavMenu.Content>
            </NavMenu.Item>
        </NavMenu.List>
        <div className="absolute left-0 top-full mx-auto flex max-w-5xl -translate-y-3 px-6 perspective-[2000px] lg:px-36">
            <NavMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut feedback-shadow relative h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[--card-radius] transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
    </NavMenu.Root>
);

const ContentLink = ({ to, children, label, description }: { to: string; children: ReactNode; label: string; description: string }) => (
    <a href={to} className="group grid gap-3 rounded-[calc(var(--card-radius)-4px)] p-[calc(var(--card-padding)/2)] [grid-template-columns:auto_1fr] hover:bg-[--ui-soft-bg]">
        <div data-rounded="large" className="flex size-10 items-center justify-center rounded-[--card-radius] border bg-[--ui-bg] text-[--title-text-color]">
            {children}
        </div>
        <div className="space-y-0.5">
            <Title as="div" weight="medium" className="flex items-center gap-1.5 text-sm">
                {label}
                <ArrowRight className="size-3 -translate-x-2 scale-75 text-[--title-text-color] opacity-0 transition-transform group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100" />
            </Title>
            <Caption>{description}</Caption>
        </div>
    </a>
);
