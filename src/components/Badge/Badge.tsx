import React from 'react'
import { BACKGROUND_ENUM } from '../../types/global.types';
import "../../styles/components/Badge.scss"
export interface BadgePropTypes {
    text?: string,
    bg: BACKGROUND_ENUM,
    className?: string,
    customColor?: string,
    customBg?: string,
}

export function Badge({ text, bg = BACKGROUND_ENUM.SUCCESS, className, customColor, customBg }: BadgePropTypes) {
    return (
        <span style={{ backgroundColor: customBg, color: customColor }} className={`badge badge__${bg} ${className}`}>{text}</span>
    )
}
