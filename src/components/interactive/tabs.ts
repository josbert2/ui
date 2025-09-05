document.addEventListener('astro:page-load', () => {
    const tabGroups = document.querySelectorAll('[data-tabgroup]');

    tabGroups.forEach((tabGroup) => {
        const tabList = tabGroup.querySelector('[role="tablist"]') as HTMLElement;
        const tabs = tabList.querySelectorAll('[role="tab"]') as NodeListOf<HTMLButtonElement>;
        const tabPanels = tabGroup.querySelectorAll('[role="tabpanel"]');
        const indicator = tabList.querySelector('[data-tabs-indicator]') as HTMLElement;

        function updateIndicator(selectedTab: HTMLButtonElement) {
            const tabRect = selectedTab.getBoundingClientRect();
            const tabListRect = tabList.getBoundingClientRect();
            indicator.style.width = `${tabRect.width}px`;
            indicator.style.left = `${tabRect.left - tabListRect.left}px`;
        }

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const selectedTab = tab;
                const selectedPanelId = selectedTab.getAttribute('aria-controls');
                const selectedPanel = document.getElementById(selectedPanelId as string) as HTMLElement;

                tabs.forEach((t) => {
                    t.setAttribute('aria-selected', 'false');
                    t.setAttribute('tabindex', '-1');
                });
                tabPanels.forEach((panel) => {
                    panel.classList.add('hidden');
                });

                selectedTab.setAttribute('aria-selected', 'true');
                selectedTab.removeAttribute('tabindex');
                selectedPanel.classList.remove('hidden');

                updateIndicator(selectedTab);
            });
        });

        const initialSelectedTab = tabList.querySelector('[aria-selected="true"]') as HTMLButtonElement;
        if (initialSelectedTab) {
            updateIndicator(initialSelectedTab);
        }
    });
});