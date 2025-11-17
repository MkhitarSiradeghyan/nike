import React from 'react'
import s from "./Cta.module.css"
import Container from '../Container/Container'
import { PiEnvelopeThin } from "react-icons/pi";

const Cta = () => {
  return (
    <div className="cta">
      <Container>
        <div className={s.body}>
        <h1 className={s.tittle}>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
        <input className={s.input} type="text" placeholder="&#9993;Enter your email address"/>
        <div className={s.button}>Subscribe to Newsletter</div>
    
    </div>
    </Container>
    </div>
  )
}

export default Cta