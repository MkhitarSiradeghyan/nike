import React, { useState } from "react";
import s from "./Banner.module.css";
import { Link } from "react-router";
import Container from "../Container/Container";
import { HiXMark } from "react-icons/hi2";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  if(isOpen) return (
    <dialog className={s.banner} open={isOpen}>
      <Container>
        <p className={s.text}>
          Sign up and get 20% off to your first order.
          <Link to="#" className={s.link}>
            Sign Up Now
          </Link>
          <button class={s.close} onClick={() => setIsOpen(false)}><HiXMark /></button>
        </p>
      </Container>
    </dialog>
  );
};

export default Banner;
