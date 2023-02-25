import React from 'react'
import '../../styles/components/Avatar.scss';
import { SIZE_ENUM, BACKGROUND_ENUM } from '../../types/global.types'

export interface AvatarPropTypes {
    size: SIZE_ENUM,
    rounded?: boolean,
    bg?: BACKGROUND_ENUM,
    className?: string,
    image?: string
}

export function Avatar({ size = SIZE_ENUM.MEDIUM, rounded, bg = BACKGROUND_ENUM.GRAY, className, image }: AvatarPropTypes) {
    return (
        <div className={`avatar avatar__${size} avatar__${rounded && 'rounded'} avatar__${bg} ${className}`}>
            {
                image && <img src={image} alt="" />
            }
        </div>
    )
}
