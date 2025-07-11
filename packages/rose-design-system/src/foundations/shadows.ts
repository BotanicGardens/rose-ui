export const shadows = {
    none: 'none',
    prepend: '0 0 0 0 transparent',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    inner2: `
    0px 0px .5px rgba(0, 0, 0, .5),
    0px 2px 6px 0px rgba(0, 0, 0, .2),
    inset 0px .5px 0px rgba(255, 255, 255, .1),
    inset 0px 0px .5px rgba(255, 255, 255, .3)
  `,
    inner3: `
    0px 0px .5px rgba(0, 0, 0, .5),
    0px 2px 6px 0px rgba(0, 0, 0, .2),
    inset 0px .5px 0px rgba(255, 255, 255, .1),
    inset 0px 0px .5px rgba(255, 255, 255, .3)
  `,
    popContainer: `
    0px 0px .5px rgba(0, 0, 0, .5),
    0px 2px 6px 0px rgba(0, 0, 0, .2),
    inset 0px .5px 0px rgba(255, 255, 255, .1),
    inset 0px 0px .5px rgba(255, 255, 255, .3)
  `,
} as const
