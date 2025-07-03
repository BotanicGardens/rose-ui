export const keyframes = {
    spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
    },

    pulse: {
        '50%': { opacity: '0.5' },
    },

    ping: {
        '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
        },
    },

    fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
    },
    fadeOut: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
    },

    slideInDown: {
        '0%': { transform: 'translateY(-100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    slideInUp: {
        '0%': { transform: 'translateY(100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
    },

    scaleIn: {
        '0%': { transform: 'scale(0.8)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
    },
    scaleOut: {
        '0%': { transform: 'scale(1)', opacity: '1' },
        '100%': { transform: 'scale(0.8)', opacity: '0' },
    },
}
