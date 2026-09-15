import React from "react";
import "./Hero.css";

import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Decorations */}
      <div className="hero-bg-circle circle-one"></div>
      <div className="hero-bg-circle circle-two"></div>
      <div className="hero-bg-glow"></div>
       {/* LEFT CONTENT */}
      <div className="hero-left">
        <p className="hero-small-title">
          NEW ARRIVALS ONLY
        </p>
<div className="hero-heading">

          <div className="hero-new">
            <span>New</span>

            <div className="hero-hand-icon">
              <span>new</span>
              <img src={hand_icon} alt="hand icon" />
            </div>
          </div>

          <h1>Collections</h1>

          <h2>for everyone</h2>

        </div>

        <p className="hero-description">
          Discover the latest fashion trends with premium quality,
          modern styles and timeless pieces designed especially for you.
        </p>

        <button className="hero-latest-btn">
          <span>Latest Collection</span>

          <div className="arrow-container">
            <img src={arrow_icon} alt="arrow" />
          </div>
        </button>

        {/* FEATURES */}
        <div className="hero-features">

          <div className="hero-feature">
            <div className="feature-icon">
              🚚
            </div>

            <div>
              <strong>Free Shipping</strong>
              <span>On all orders</span>
            </div>
          </div>

          <div className="hero-feature">
            <div className="feature-icon">
              ↻
            </div>

            <div>
              <strong>Easy Returns</strong>
              <span>Hassle free</span>
            </div>
          </div>

          <div className="hero-feature">
            <div className="feature-icon">
              🛡
            </div>

            <div>
              <strong>Secure Payment</strong>
              <span>100% secure</span>
            </div>
          </div>

        </div>

      </div>


      {/* RIGHT IMAGE */}
      <div className="hero-right">

        <div className="hero-image-circle"></div>

        <div className="hero-image-ring"></div>

        <img
          src={hero_image}
          alt="New fashion collection"
          className="hero-image"
        />

        <div className="hero-style-text">
          <span>STYLE</span>
          <span>YOUR</span>
          <span>STORY</span>
        </div>

      </div>

    </section>
  );
};

export default Hero;