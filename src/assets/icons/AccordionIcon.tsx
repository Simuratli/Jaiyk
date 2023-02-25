import React from 'react'

export function AccordionIcon({ rotate }: { rotate?: boolean }) {
    return (
        <svg style={{ transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33592 6.47895C8.25673 6.381 8.1296 6.33307 8.0004 6.33307C7.87119 6.33307 7.74407 6.381 7.64612 6.47895L5.31206 8.81301C5.11668 9.00838 5.11668 9.32484 5.31206 9.52031C5.50743 9.71579 5.82388 9.71569 6.01936 9.52031L8.0004 7.5397L9.98081 9.52011C10.1762 9.71548 10.4926 9.71548 10.6881 9.52011C10.8836 9.32473 10.8835 9.00828 10.6881 8.8128L8.33592 6.47895Z" fill="#212121" />
        </svg>
    )
}
