document.addEventListener('astro:page-load', function () {
    const accordions = document.querySelectorAll('[data-accordion]');

    accordions.forEach((accordion) => {
        const mode = accordion.getAttribute('data-accordion');
        const triggers = accordion.querySelectorAll('[data-trigger]');

        triggers.forEach((trigger) => {
            const isOpen = trigger.getAttribute('aria-expanded') === 'true';
            if (isOpen) {
                const content = document.getElementById(trigger.getAttribute('aria-controls') as string) as HTMLElement;
                if (content) {
                    content.style.setProperty('--accordion-content-height', `${content.scrollHeight}px`);
                    content.dataset.state = 'open';
                }
            }
        });

        triggers.forEach((trigger) => {
            trigger.addEventListener('click', function () {
                const content = document.getElementById(this.getAttribute('aria-controls')) as HTMLDivElement;
                const isOpen = this.getAttribute('aria-expanded') === 'true';

                if (mode === 'single') {
                    triggers.forEach((btn) => {
                        if (btn !== this) {
                            btn.setAttribute('aria-expanded', 'false');
                            const controlId = btn.getAttribute('aria-controls');
                            if (controlId) {
                                const contentElement = document.getElementById(controlId);
                                if (contentElement) {
                                    contentElement.style.setProperty('--accordion-content-height', '0');
                                    contentElement.dataset.state = 'closed';
                                }
                            }
                        }
                    });
                }

                this.setAttribute('aria-expanded', (!isOpen).toString());
                isOpen ? content.style.setProperty('--accordion-content-height', '0') : content.style.setProperty('--accordion-content-height', `${content.scrollHeight}px`);
                content.dataset.state = isOpen ? 'closed' : 'open';
            });
        });
    });
});