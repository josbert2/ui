const defaultFeedbackColors = {
    danger: 'red',
    warning: 'yellow',
    success: 'green',
    info: 'blue',
}

export const palettes = [
    {
        name: 'passion',
        colors: {
            primary: 'red',
            ...defaultFeedbackColors,
            gray: 'neutral',
        },
    },
    {
        name: 'mystery',
        colors: {
            primary: 'red',
            ...defaultFeedbackColors,
            gray: 'slate',
        },
    },
    {
        name: 'oz',
        colors: {
            primary: 'indigo',
            ...defaultFeedbackColors,
            danger: 'rose',
            success: 'lime',
            gray: 'zinc',
        },
    },
    {
        name: 'romance',
        colors: {
            primary: 'red',
            ...defaultFeedbackColors,
            gray: 'slate',
        },
    },
    {
        name: 'energy',
        colors: {
            primary: 'orange',
            ...defaultFeedbackColors,
            gray: 'stone',
        },
    },
    {
        name: 'winter',
        colors: {
            primary: 'cyan',
            ...defaultFeedbackColors,
            danger: 'rose',
            success: 'lime',
            warning: 'amber',
            info: 'cyan',
            gray: 'slate',
        },
    },
    {
        name: 'spring',
        colors: {
            primary: 'lime',
            ...defaultFeedbackColors,
            gray: 'gray',
        },
    },
    {
        name: 'nature',
        colors: {
            primary: 'green',
            ...defaultFeedbackColors,
            gray: 'slate',
        },
    },
    {
        name: 'trust',
        colors: {
            primary: 'blue',
            ...defaultFeedbackColors,
            gray: 'zinc',
        },
    },
]
