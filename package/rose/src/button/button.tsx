'use client'

import React from 'react'

export interface ButtonProps {
    onClick: () => void
    className?: string
    children: React.ReactNode
}

export const Button = (props: ButtonProps) => {
    const { onClick, className, children } = props

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}
