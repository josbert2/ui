document.addEventListener('astro:page-load', () => {
    const triggers = document.querySelectorAll('[data-tooltip]') as NodeListOf<HTMLElement>;
    let activeTooltip: HTMLElement | null = null;

    triggers.forEach((trigger) => {
        const tooltipTemplate = document.getElementById('tooltip-template') as HTMLTemplateElement;
        const tooltip = document.importNode(tooltipTemplate.content, true).firstElementChild as HTMLElement;

        const content = trigger.getAttribute('data-tooltip-content');
        const position = trigger.getAttribute('data-tooltip-position') || 'top';
        const id = trigger.getAttribute('aria-describedby');
        const offset = parseInt(trigger.getAttribute('data-tooltip-offset') || '8');

        if (content) tooltip.textContent = content;
        tooltip.setAttribute('id', id as string);
        tooltip.style.position = 'fixed';
        tooltip.style.transform = position === 'top' ? 'translateY(0.5rem)' : position === 'bottom' ? 'translateY(-0.5rem)' : position === 'left' ? 'translateX(0.5rem)' : 'translateX(-0.5rem)';
        document.body.appendChild(tooltip);

        const updateTooltipPosition = () => {
            const triggerRect = trigger.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();

            const positions = {
                top: {
                    top: triggerRect.top - tooltipRect.height - offset,
                    left: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2,
                },
                bottom: {
                    top: triggerRect.bottom + offset,
                    left: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2,
                },
                left: {
                    top: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
                    left: triggerRect.left - tooltipRect.width - offset,
                },
                right: {
                    top: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
                    left: triggerRect.right + offset,
                },
            };

            const preferredCoords = positions[position as keyof typeof positions];
            const fallbackPosition = getFallbackPosition(position);
            const fallbackCoords = positions[fallbackPosition];

            const finalCoords = isInViewport(preferredCoords, tooltipRect)
                ? preferredCoords
                : fallbackCoords;

            tooltip.style.top = `${finalCoords.top}px`;
            tooltip.style.left = `${finalCoords.left}px`;
        };

        const showTooltip = () => {
            tooltip.setAttribute('data-tooltip-position', position);
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0)';
            activeTooltip = tooltip;
            updateTooltipPosition();
            window.addEventListener('scroll', updateTooltipPosition);
            window.addEventListener('resize', updateTooltipPosition);
        };

        const hideTooltip = () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
            tooltip.style.transform = position === 'top' ? 'translateY(0.5rem)' : position === 'bottom' ? 'translateY(-0.5rem)' : position === 'left' ? 'translateX(0.5rem)' : 'translateX(-0.5rem)';
            if (activeTooltip === tooltip) activeTooltip = null;
            window.removeEventListener('scroll', updateTooltipPosition);
            window.removeEventListener('resize', updateTooltipPosition);
        };

        let isHoveringTrigger = false;
        let isHoveringTooltip = false;

        const conditionalHide = () => {
            if (!isHoveringTrigger && !isHoveringTooltip) {
                hideTooltip();
            }
        };

        trigger.addEventListener('mouseenter', () => {
            isHoveringTrigger = true;
            showTooltip();
        });

        trigger.addEventListener('mouseleave', () => {
            isHoveringTrigger = false;
            setTimeout(conditionalHide, 100);
        });

        trigger.addEventListener('click', hideTooltip)

        tooltip.addEventListener('mouseenter', () => {
            isHoveringTooltip = true;
            showTooltip();
        });

        tooltip.addEventListener('mouseleave', () => {
            isHoveringTooltip = false;
            setTimeout(conditionalHide, 100);
        });

        trigger.addEventListener('focus', showTooltip);
        trigger.addEventListener('blur', hideTooltip);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && activeTooltip) {
            activeTooltip.style.visibility = 'hidden';
            activeTooltip.style.opacity = '0';
            activeTooltip = null;
        }
    });

    function getFallbackPosition(position: string) {
        switch (position) {
            case 'top':
                return 'bottom';
            case 'bottom':
                return 'top';
            case 'left':
                return 'right';
            case 'right':
                return 'left';
            default:
                return 'top';
        }
    }

    function isInViewport(coords: { top: number; left: number }, tooltipRect: DOMRect) {
        const { top, left } = coords;
        return (
            top >= 36 &&
            left >= 36 &&
            top + tooltipRect.height <= window.innerHeight &&
            left + tooltipRect.width <= window.innerWidth
        );
    }
});
