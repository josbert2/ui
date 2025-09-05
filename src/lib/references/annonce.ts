export const root = {
    head: {
        cells: ['Prop', 'Type', 'Usage'],
    },
    rows: [
        {
            cells: ['size', `"xs" | "sm" | "md" | "lg"`, 'sz-[size]'],
        },
        {
            cells: ['variant', `"outlined" | "soft" | "mixed"`, 'variant-[variant]'],
        },
    ],
}

export const concern = {
    head: {
        cells: ['Prop', 'Type', 'Usage'],
    },
    rows: [
        {
            cells: ['size', `"xs" | "sm" | "md" | "lg"`, 'sz-[size]'],
        },
        {
            cells: ['variant', `"outlined" | "soft" | "solid"`, 'variant-[variant]'],
        },
        {
            cells: ['intent', `"primary" | "secondary" | "accent" | "info" | "danger" | "warning" | "success" | "gray" | "neutral"`, 'intent-[intent]'],
        },
    ],
}
