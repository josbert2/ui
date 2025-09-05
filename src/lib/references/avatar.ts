export default {
    head: {
        cells: ['Prop', 'Type', 'Usage'],
    },
    rows: [
        {
            cells: ['size', `"xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"`, 'sz-[size]'],
        },
        {
            cells: ['status', `"online" | "offline" | "busy" | "away"`, 'status-[status]'],
        },
        {
            cells: ['fallback', `"neutral" | "primary"`, 'fallback-[variant]'],
        },
    ],
}
