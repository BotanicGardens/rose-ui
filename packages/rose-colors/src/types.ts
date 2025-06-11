export type ColorFormat = 'hex' | 'rgb' | 'hsl'

export interface RGB {
    r: number
    g: number
    b: number
}

export interface HSL {
    h: number
    s: number
    l: number
}

export interface ColorScale {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    950: string
}

export type ColorTuple = RGB | HSL

export type SemanticColors = Record<string, ColorScale>
