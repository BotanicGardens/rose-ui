/**
 * ---------------------------------------------
 * |   Foundations Design Languages             |
 * ---------------------------------------------
 */

/** Color-system */
export {
    default as colors,
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

    // theming
    lightColors,
    darkColors,
    darkestColors,
} from './color'

/** Mutual-system */
export { cursor } from './cursor'

/** Border-system */
export { default as borders, borderWidths, borderRadius } from './borders'

/** Motion-system */
export { default as motion, animations, durations, keyframes, curves } from './motion'

/** Typography-system */
export { default as typography, fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacings } from './typography'

/** Measure-system */
export { sizes } from './size'
export { spacing } from './spacings'
export { zIndex } from './z-index'

/** Shape-system */
export { radii } from './radius'
export { strokeWidths } from './stroke-widths'

/** Effects-system */
export { shadows } from './shadows'
export { breakpoints } from './breakpoints'
