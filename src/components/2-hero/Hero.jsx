import React from "react";
import "../2-hero/Hero.css";
export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img src="./protofolio.png" className="avatar" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">
          Software group design and all mobile application
        </h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit libero
          illum quidem possimus architecto esse unde aut ipsa asperiores
          blanditiis, exercitationem, adipisci ut! At voluptas praesentium ipsum
          quam ea.
        </p>
        <div className="social-icons flex ">
          <div className=" icon icon-facebook"></div>
          <div className="icon icon-linkedin2"></div>
          <div className="icon icon-twitter"></div>
          <div className="icon icon-github"></div>
        </div>
      </div>
      <div className="right-section animation  border"></div>
    </section>
  );
}
