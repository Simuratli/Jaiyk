import React, { useEffect, useState } from 'react';
import { AccordionIcon } from '../../assets';
import '../../styles/components/Accordion.scss';

export interface AccordionPropTypes {
    headerText?: string,
    children?: React.ReactNode,
    className?: string;
}

export function Accordion({ headerText, children, className }: AccordionPropTypes) {

    const [open, setOpen] = useState(false)

    return (
        <div className={`accordion ${className}`}>
            <div onClick={() => { setOpen(prev => !prev) }} className={`accordion__header ${open && 'accordion__header__open'}`}>{headerText} <AccordionIcon rotate={open} /></div>
            <div className={`accordion__content ${open && 'accordion__content__open'}`}>
                <div className="accordion__content__data">
                    {children}
                </div>
            </div>
        </div>
    )
}
