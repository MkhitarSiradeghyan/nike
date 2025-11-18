import React from "react";
import s from "./Profile.module.css";
import Container from "../Container/Container";
import card from "../../assets/img/card_img_ex.png"

const Profile = () => {
  return (
    <Container>
      <div className={s.picture}>
        <img src={card} alt="card_img_ex.png" />
        <img src={card} alt="card_img_ex.png" />
        <img src={card} alt="card_img_ex.png" />
        <img src={card} alt="card_img_ex.png" />
      </div>
      <h1 className={s.title}>One Life Graphic T-shirt</h1>
      <div className={s.rating}>
        <div className={s.star}></div>
        <div className={s.star1}></div>
        <div className={s.star2}></div>
        <div className={s.star3}></div>
        <div className={s.halfstar}></div>
        <div className={s.numb}></div>
        <div className={s.gray}></div>
      </div>
      <div className={s.amount}>
        <div className={s.price}></div>
        <div className={s.sale}></div>
        <div className={s.percent}></div>
      </div>
      <p className={s.font}>
        This graphic t-shirt which is perfect for any occasion. Crafted from a
        soft and breathable fabric, it offers superior comfort and style.
      </p>
      <hr className={s.line} />
      <div className={s.colors}>
        <div className={s.select}>Select Colors</div>
        <div className={s.circle}>
          <div className={s.brown}></div>
          <div className={s.green}></div>
          <div className={s.purple}></div>
        </div>
      </div>
      <hr className={s.line2} />
      <div className={s.size}>
        <div className={s.choose}>Choose Size</div>
        <div className={s.small}>Small</div>
        <div className={s.medium}>Medium</div>
        <div className={s.large}>Large</div>
        <div className={s.xlarge}>X-large</div>
      </div>
      <hr className={s.line3} />
      <div className={s.button}>
        <div className={s.amo}>
          <div className={s.minus}>-</div>
          <div className={s.one}>1</div>
          <div className={s.plus}>+</div>
        </div>
        <div className={s.cart}>
          <div className={s.add}>Add to Cart</div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
