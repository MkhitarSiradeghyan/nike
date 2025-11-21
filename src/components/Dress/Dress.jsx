import React from "react";
import s from "./Dress.module.css";
import casual from "../../assets/img/style_1.png";
import formal from "../../assets/img/style_2.png";
import party from "../../assets/img/style_3.png";
import gym from "../../assets/img/style_4.png";
import Container from "../Container/Container";

const Dress = () => {


  return (
    <Container>
      <div className={s.dress_wrap}>
        <h1 className={s.dress_title}>browse by dress style</h1>
        <div className={s.dress_styles}>
          <div className={s.dresss_style}>
            <div
              className={s.dress_casual}

            >
              <p className={s.dress_text}>Casual</p>
              <img className={s.dress_img1} src={casual} alt="Casual" />
            </div>

            <div
              className={s.dress_formal}

            >
                <p className={s.dress_text}>Formal</p>
              <img className={s.dress_img2} src={formal} alt="Formal" />
            </div>
          </div>

          <div className={s.dress_style}>
            <div
              className={s.dress_party}

            >
              <p className={s.dress_text}>Party</p>
              <img className={s.dress_img3} src={party} alt="Party" />
            </div>

            <div className={s.dress_gym} >
              <p className={s.dress_text }>Gym</p>
              <img className={s.dress_img4} src={gym} alt="Gym" />
            </div>
          </div>
        </div>
      </div>


    </Container>
  );
};

export default Dress;