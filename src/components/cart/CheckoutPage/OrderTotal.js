import React from 'react'
import './OrderTotal.css'

export default function OrderTotal() {
    return (
        <div className='order-total-root'>
            <h3> Order Total</h3>
            <hr />
            <div className='solid'>
                <span>
                    Item subtotal:
                </span>
                <span> $0.00</span>
            </div>
            <div>
                <span>Service fee:</span>
                <span> $3.50</span>
            </div>
            <div>
                <span>Est. tax:</span>
                <span> $0.00</span>
            </div>
            <hr />
            <br />
            <div className='rounded'>
                <span>Subtotal:</span>
                <span> $3.50</span>
            </div>
        </div>
    )
}