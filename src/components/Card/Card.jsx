import React from "react";
import s from "./Card.module.css";
import Container from "../Container/Container";
const Card = () => {
  return (
    <Container>
      <div className={s.card_wrap}>
        <div className={s.card_Tshirt}>
          <img src="" alt="" className={s.card_img} />
          <div className={s.card_despriction}>
            <h6 className={s.text_title}>Gradient Graphic T-shirt</h6>
            <p className={s.card_size}> Size:</p>
            <p className={s.card_color}>Color:</p>
            <p className={s.card_text}>Large</p>
            <p className={s.card_text}>White</p>
            <div className={s.card_value}>
              <small>$</small>
              <span>145</span>
            </div>
          </div>
        </div>
        <div className={s.card_shirt}>
          <img src="" alt="" className={s.card_img} />
          <div className={s.card_despriction}>
            <h6 className={s.text_title}>Gradient Graphic T-shirt</h6>
            <p className={s.card_size}> Size:</p>
            <p className={s.card_color}>Color:</p>
            <p className={s.card_text}>Medium</p>
            <p className={s.card_text}>Red</p>
            <div className={s.card_value}>
              <small>$</small>
              <span>180</span>
            </div>
            <div className={s.card_quantity}>
              
            </div>
          </div>
        </div>
        <div className={s.card_jeans}>
          <img src="" alt="" className={s.card_img} />
          <div className={s.card_despriction}>
            <h6 className={s.text_title}>Gradient Graphic T-shirt</h6>
            <p className={s.card_size}> Size:</p>
            <p className={s.card_color}>Color:</p>
            <p className={s.card_text}>Large</p>
            <p className={s.card_text}>Blue</p>
            <div className={s.card_value}>
              <small>$</small>
              <span>240</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
