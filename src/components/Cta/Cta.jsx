import React from 'react'
import s from "./Cta.module.css"
import Container from '../Container/Container'

const Cta = () => {
  return (
    <div className={s.cta}>
      <Container>
        <div className={s.body}>
        <h2 className={s.title}>Stay up to date abaut our latest offers</h2>
        <input className={s.input} type="text" placeholder='Enter your email address' />
        <div className={s.button}>Subscribe to newsletter</div>
    </div>
    </Container>
    </div>
    

  )
}

export default Cta;














