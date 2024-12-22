import { describe, it, expect } from 'vitest'
import { ColorGenerator } from '../src/generator'
import { hexToHSL } from '../src/convert'

const baseColor = '#FA541C'

describe('ColorGenerator', () => {
    it('should generate natural color scale', () => {
        const scale = ColorGenerator.generate(baseColor)

        expect(Object.keys(scale)).toHaveLength(11)
        Object.values(scale).forEach((color) => {
            expect(color).toMatch(/^#[0-9A-F]{6}$/i)
        })

        const lightnesses = Object.values(scale).map(
            (color) => hexToHSL(color).l
        )
        expect(lightnesses).toEqual([...lightnesses].sort((a, b) => b - a))
    })

    it('should generate dark theme colors', () => {
        const scale = ColorGenerator.generateDark(baseColor)

        const lightnesses = Object.values(scale).map(
            (color) => hexToHSL(color).l
        )
        expect(lightnesses).toEqual([...lightnesses].sort((a, b) => a - b))
    })
})
