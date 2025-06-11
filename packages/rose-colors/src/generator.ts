import { hexToHSL, hslToHex, applyGamma } from './convert'
import { baseColors, semanticColors } from './presets'
import type { HSL } from './types'

const distSatu = 1.618,
    lightSatu = 66

export const ColorGenerator = {
    SCALE_MAPPING: {
        50: { lightness: 95, saturation: 0.12 }, // Very light
        100: { lightness: 90, saturation: 0.18 }, // Light
        200: { lightness: 85, saturation: 0.25 }, // Soft
        300: { lightness: 75, saturation: 0.4 }, // Normal
        400: { lightness: 65, saturation: 0.6 }, // Strong
        500: { lightness: 55, saturation: 0.86 }, // Base
        600: { lightness: 45, saturation: 0.9 }, // Darker
        700: { lightness: 35, saturation: 0.92 }, // Even darker
        800: { lightness: 25, saturation: 0.95 }, // Very dark
        900: { lightness: 20, saturation: 0.98 }, // Black
        950: { lightness: 15, saturation: 0.99 }, // Black
    },

    /**
     * 生成色阶
     * @param baseColor - 基础颜色的 HEX 值
     * @param isDark - 是否为暗色主题
     * @returns 生成的色阶对象
     */
    generate(baseColor: string, isDark = false): Record<string, string> {
        const baseHsl = hexToHSL(baseColor)
        const scale: Record<string, string> = {}

        for (const [key, config] of Object.entries(this.SCALE_MAPPING)) {
            let adjustedHsl: HSL

            if (isDark) {
                adjustedHsl = {
                    h: baseHsl.h,
                    s: Math.round(
                        Math.min(100, baseHsl.s * config.saturation * distSatu)
                    ),
                    l: Math.round(100 - applyGamma(config.lightness)),
                }
            } else {
                adjustedHsl = {
                    h: baseHsl.h,
                    s: Math.round(
                        Math.min(100, baseHsl.s * config.saturation * lightSatu)
                    ),
                    l: Math.round(applyGamma(config.lightness)),
                }
            }

            scale[key as unknown as keyof typeof ColorGenerator.SCALE_MAPPING] =
                hslToHex(adjustedHsl)
        }

        return scale
    },

    /**
     * 生成暗色主题色阶
     * @param baseColor - 基础颜色的 HEX 值
     * @returns 生成的暗色主题色阶对象
     */
    generateDark(baseColor: string): Record<string, string> {
        return this.generate(baseColor, true)
    },
}

// 生成标准色阶
export const colors = Object.entries(baseColors).reduce(
    (acc, [name, color]) => {
        acc[name] = ColorGenerator.generate(color)
        return acc
    },
    {} as Record<string, ReturnType<typeof ColorGenerator.generate>>
)

// 生成语义化色阶
export const semantic = Object.entries(semanticColors).reduce(
    (acc, [name, color]) => {
        acc[name] = ColorGenerator.generate(color)
        return acc
    },
    {} as Record<string, ReturnType<typeof ColorGenerator.generate>>
)

// 生成暗色主题色阶
export const dark = Object.entries(baseColors).reduce(
    (acc, [name, color]) => {
        acc[name] = ColorGenerator.generateDark(color)
        return acc
    },
    {} as Record<string, ReturnType<typeof ColorGenerator.generate>>
)

console.log(colors, dark)
