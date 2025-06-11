import convert from 'color-convert'
import { HSL, RGB } from './types'

/**
 * 伽马校正
 * @param value - 输入值
 * @returns 校正后的值
 */
export const gamma = (value: number): number => Math.pow(value, 2.2)

/**
 * 反伽马校正
 * @param value - 输入值
 * @returns 校正后的值
 */
export const deGamma = (value: number): number => Math.pow(value, 1 / 2.2)

/**
 * 将16进制颜色转换为HSL对象
 * @param hex - 16进制颜色字符串
 * @returns HSL对象
 */
export const hexToHSL = (hex: string): HSL => {
    const [h, s, l] = convert.hex.hsl(hex.replace('#', ''))
    return { h, s, l }
}

/**
 * 将HSL对象转换为16进制颜色
 * @param hsl - HSL对象
 * @returns 16进制颜色字符串
 */
export const hslToHex = ({ h, s, l }: HSL): string => {
    const rgb = convert.hsl.rgb([h, s, l])
    return '#' + convert.rgb.hex(rgb)
}

/**
 * 将RGB对象转换为HSL对象
 * @param rgb - RGB对象
 * @returns HSL对象
 */
export const rgbToHSL = ({ r, g, b }: RGB): HSL => {
    const [h, s, l] = convert.rgb.hsl([r, g, b])
    return { h, s, l }
}

/**
 * 应用gamma校正以获得更自然的渐变
 * @param value - 输入值
 * @param gamma - gamma值，默认为2.2
 * @returns 校正后的值
 */
export const applyGamma = (value: number, gamma = 2.2): number =>
    Math.pow(value / 100, 1 / gamma) * 100

/**
 * 移除gamma校正
 * @param value - 输入值
 * @param gamma - gamma值，默认为2.2
 * @returns 校正后的值
 */
export const removeGamma = (value: number, gamma = 2.2): number =>
    Math.pow(value / 100, gamma) * 100

/**
 * 将颜色从HEX转换为RGB
 * @param hex - 16进制颜色字符串
 * @returns RGB对象
 */
export const hexToRGB = (hex: string): RGB => {
    const [r, g, b] = convert.hex.rgb(hex.replace('#', ''))
    return { r, g, b }
}

/**
 * 将RGB转换为HEX
 * @param rgb - RGB对象
 * @returns 16进制颜色字符串
 */
export const rgbToHex = ({ r, g, b }: RGB): string =>
    `#${convert.rgb.hex([r, g, b])}`
