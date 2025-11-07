import React from 'react'
import s from "./Cta.module.css"

const Cta = () => {
  return (
    <div className={s.container}>
        <h1 className={s.tittle}>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
        <input className={s.input} type="text" />
        <div className={s.button}>Subscribe to Newsletter</div>
    </div>
  )
}

export default Cta