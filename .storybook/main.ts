import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    stories: [
        './guides/**/*.mdx',
        '../packages/rose-ui/__stories__/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    staticDirs: ['./assets', './assets/images'],
    addons: [
        '@chromatic-com/storybook',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        '@storybook/addon-vitest',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
}
export default config
