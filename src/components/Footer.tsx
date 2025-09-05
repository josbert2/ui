import { SITE_SOCIAL_GITHUB, SITE_SOCIAL_LINKEDIN, SITE_SOCIAL_TWITTER, SITE_SOCIAL_YOUTUBE, SITE_BLOG, SITE_STORE } from '../const';
import { Link, Title } from './tailus-ui/typography';
import BrandLogo from './utilities/BrandLogo';
import { BlurDivs } from './utilities/DocsProgressiveBlur';

export default function Footer() {
    const links: { url: string; label: string }[] = [
        { url: SITE_BLOG, label: 'Blog' },
        { url: SITE_STORE, label: 'Store' },
        { url: 'https://tailus.gumroad.com/', label: 'Gumroad' },
        { url: SITE_STORE, label: 'VS Code extension' },
        { url: "https://tailtips.dev", label: 'Tailtips' },
        { url: "https://spectr.irung.me", label: 'Spectr' },
        { url: "https://aspect.irung.me", label: 'Aspect' },
    ]

    const templatesLinks: { url: string; label: string }[] = [
        { url: 'https://tailus.io/templates/ampire', label: 'Ampire' },
        { url: 'https://tailus.io/templates/radiant', label: 'Radiant' },
        { url: 'https://tailus.io/templates/astrolus', label: 'Astrolus' },
        { url: 'https://tailus.io/templates/', label: 'All templates' }
    ];

    const uikits: { url: string; label: string }[] = [
        { url: 'https://ui.tailus.io/get-started/introduction', label: 'React' },
        { url: '/', label: 'HTML' },
        { url: '#', label: 'Symfony' }
    ];

    const communityLinks: { url: string; label: string }[] = [
        { url: SITE_SOCIAL_GITHUB, label: 'GitHub' },
        { url: SITE_SOCIAL_YOUTUBE, label: 'Youtube' },
        { url: SITE_SOCIAL_TWITTER, label: 'X / Twitter' },
        { url: SITE_SOCIAL_LINKEDIN, label: 'LinkedIn' }
    ];

    const footer = [
        {
            title: 'Ressources',
            target: '_blank',
            links: links
        },
        {
            title: 'UI Kits',
            links: uikits,
            target: '_self'
        },
        {
            title: 'Templates',
            links: templatesLinks,
            target: '_self'
        },
        {
            title: 'Community',
            links: communityLinks,
            target: '_blank'
        }
    ];

    return (
        <footer className="sticky bottom-0 pb-40">
            <div className="mx-auto max-w-xl space-y-16 px-6 sm:px-12">
                <div className="grid scale-0 grid-cols-2 px-2 will-change-transform" data-footer>
                    <div className="h-auto">
                        <a href="/" aria-label="go home">
                            <BrandLogo className="h-6" />
                        </a>

                        <div className="mt-6 flex flex-wrap gap-1 overflow-hidden text-sm font-medium text-gray-700 dark:text-gray-300">
                            With 💙 from
                            <div className="flex items-start justify-center gap-2 text-center font-semibold text-gray-950 sm:gap-1 dark:text-white">
                                <div className="block">
                                    <div className="block pb-2">DR Congo</div>
                                    <div className="-mt-5 grow overflow-hidden">
                                        <svg aria-hidden="true" className="w-16" height="22" viewBox="0 0 283 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332" stroke="url(#paint0_linear_pl)" strokeWidth="4"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_pl" x1="282" y1="5.49999" x2="40" y2="13" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#facc15"></stop>
                                                    <stop offset="1" stopColor="#a855f7"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {footer.map((col) => (
                            <div>
                                <Title as="h3" className="text-sm" weight="medium">
                                    {col.title}
                                </Title>
                                <ul className="mt-4 list-inside space-y-2">
                                    {col.links.map((link) => (
                                        <li>
                                            <Link href={link.url} target={col.target} size="sm" intent="gray">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
