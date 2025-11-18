import React from "react";
import s from "./Brands.module.css";
import Container from "../Container/Container";
import brand_1 from "../../assets/img/brand_1.png";
import brand_2 from "../../assets/img/brand_2.png";
import brand_3 from "../../assets/img/brand_3.png";
import brand_4 from "../../assets/img/brand_4.png";
import brand_5 from "../../assets/img/brand_5.png";

const Brands = () => {
  return (
    <div className={s.background}>
      <Container>
        <div className={s.wrap}>
          <img src={brand_1} alt="brand_1.png" />
          <img src={brand_2} alt="brand_2.png" />
          <img src={brand_3} alt="brand_3.png" />
          <img src={brand_4} alt="brand_4.png" />
          <img src={brand_5} alt="brand_5.png" />
        </div>
      </Container>
    </div>
  );
};

export default Brands;
