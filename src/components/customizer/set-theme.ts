export default function setTheme (root: HTMLElement, target:string, value, global:boolean=true) {
    const iframes = document.querySelectorAll('iframe') as NodeListOf<HTMLIFrameElement>
    global && root.setAttribute(`data-${target}`, value)
    iframes.forEach((iframe) => {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
            if (iframeDoc && iframeDoc.location.origin === window.location.origin) {
                iframeDoc.documentElement.setAttribute(`data-${target}`, value)
            }
        } catch (e) {
            console.error('Could not change theme in iframe:', e)
        }
    })
}