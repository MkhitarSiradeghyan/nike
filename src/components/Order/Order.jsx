import React from 'react'
import Container from '../Container/Container'
import s from "./Order.module.css"

const Order = () => {
  return (
    <div className={s.order}>
        <Container>
            <h3>Order Summary</h3>
            <div className={s.price}>
                <div className={s.subtotal}>Subtotal</div>
                <div className={s.discount}>Discount (-20%)</div>
                <div className={s.delivery}>Delivery Free</div>
            </div>
            <div className={s.total}></div>
            <input className={s.promo} type="text" placeholder='Add promo code'/>
            <button className={s.apply}>Apply</button>
            <button className={s.checkout}>Go to Checkout</button>
        </Container>
    </div>
)
}

export default Order