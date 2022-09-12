import React from 'react'
import './OrderTotal.css'

export default function OrderTotal() {
    return (
        <div className='order-total-root'>
            <h3> Order Total</h3>
            <div className='solid'>
                <span>
                    Item subtotal:
                </span>
                <span className='money'> $0.00</span>
            </div>
            <div>
                <span>Service fee:</span>
                <span className='money'> $3.50</span>
            </div>
            <div>
                <span>Est. tax:</span>
                <span className='money'> $0.00</span>
            </div>
            <br />
            <div className='rounded'>
                <span>Subtotal:</span>
                <span className='money'> $3.50</span>
            </div>
        </div>
    )
}