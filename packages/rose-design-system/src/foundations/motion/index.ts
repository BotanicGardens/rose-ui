import { keyframes } from './keyframes'
import { durations } from './durations'
import { easings } from './easings'
import { curves } from './curves'
import { animations } from './animations'

export { durations, easings, keyframes, animations, curves }

export default {
    // 动画持续时间
    durations,

    // 动画缓动函数
    easings,

    // 关键帧动画
    keyframes,

    // 动画
    animations,

    // 线性
    curves,
} as const
