export default {
    head: {
        cells: ['Prop', 'Type', 'Usage'],
    },
    rows: [
        {
            cells: ['intent', `"primary" | "info" | "neutral"`, 'intent-[intent]'],
        },
        {
            cells: ['variant', `"ghost" | "underlined" | "animated"`, 'variant-[variant]'],
        },
    ],
}
