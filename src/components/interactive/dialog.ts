document.addEventListener('astro:page-load', () => {
    const dialogTriggers = document.querySelectorAll('[data-dialog-trigger]') as NodeListOf<HTMLButtonElement>;

    dialogTriggers.forEach((dialogTrigger) => {
        const dialogId = dialogTrigger.getAttribute('data-dialog-trigger') as string;

        if (!dialogId) {
            console.error('Dialog trigger is missing a valid "data-dialog-trigger" attribute.');
            return; 
        }

        const dialog = document.getElementById(dialogId) as HTMLDialogElement | null;

        if (!dialog) {
            console.error(`Dialog with ID "${dialogId}" not found.`);
            return; 
        }

        const dialogClose = dialog.querySelector('[data-dialog-close]') as HTMLButtonElement | null;

        if (!dialogClose) {
            console.error(`Close button not found in dialog with ID "${dialogId}".`);
            return; 
        }

        dialogTrigger.addEventListener('click', () => dialog.showModal());
        dialogClose.addEventListener('click', () => dialog.close());
    });
});
