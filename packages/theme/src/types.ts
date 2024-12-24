/**
 * 默认主题全局配置
 * @param {roodDir} 本地配置文件目录 默认 ( . )
 * @param {enabelSystemTheme} 是否启用系统主题 默认 true
 * @param {enabelConfig} 是否启用本地配置文件 默认 false, 启用后将会读取本地配置文件, 但必须配置 roodDir
 */
export interface Options {
    roodDir?: string
    enabelConfig?: boolean
    enabelSystemTheme?: boolean
    cssVarsPrefix: string
    cssVarsRoot: string
    globalCss: string
    extends?: ThemeExtendOptions
    theme?: ThemeOptions
}

/**
 * 主题扩展配置
 * @param {Record<string, string>} custom 自定义主题配置
 * @param {object} tailwind 主题配置
 */
export interface ThemeExtendOptions {
    custom?: Record<string, string>
    tailwind?: object
}

/**
 * 主题配置
 * @param {string} systemTheme 系统主题
 * @param {ThemeTokens} tokens 主题配置
 * @param {SemanticOptions} semanticTokens 语义主题配置
 */
export interface ThemeOptions {
    systemTheme?: 'light' | 'dark' | 'system'
    tokens?: ThemeTokens
    semanticTokens?: SemanticOptions
}

/**
 * 主题 token
 * @param {string} fonts
 * @param {string} size
 * @param {string} z-index
 * @param {string} cursor
 * @param {string} raddi 圆角
 * @param {string} components
 */
export interface ThemeTokens {
    fonts?: string
}

/**
 * 语义主题配置
 * @param {string} colors 颜色
 * @param {string} shadows 阴影
 */
export interface SemanticOptions {
    colors?: string
    shadows?: string
}
