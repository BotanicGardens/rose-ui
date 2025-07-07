import colorPalette from './palette/spectrum.color.palette'
/**
 * default globel system color
 * TODO: useing @rose-ui/colors generate
 */
export const baseColors = {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    white: '#ffffff',
    black: '#000000',
}

export const { white, black, transparent, inherit, current } = baseColors

const { light, dark, darkest } = colorPalette

export const lightColors = light.global
export const darkColors = dark.global
export const darkestColors = darkest.global

export const {
    gray,
    blue,
    green,
    orange,
    red,
    celery,
    chartreuse,
    cyan,
    fuchsia,
    indigo,
    magenta,
    purple,
    seafoam,
    yellow,
} = lightColors

const colors = {
    ...baseColors,
    theme: {
        light: lightColors,
        dark: darkColors,
        darkest: darkestColors,
    },
}

export default colors
