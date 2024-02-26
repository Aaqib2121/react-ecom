import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <Wrapper>
      <section className="container">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <div className="hero-section-image">
              <figure>
                <img
                  src="images/hero-goat.jpeg"
                  alt="hero-section-image"
                  className="img-style"
                />
              </figure>
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <div className="hero-section-data">
              <p className="intro-data">Welcome to my page</p>
              <h1>{name}</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <NavLink to="/shop">
                <Button className="shop-button">Shop Now</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 24rem 0;

  .img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
  }
  figure::after {
    content: "";
    width: 45%;
    height: 80%;
    background-color: #1f5156;
    position: absolute;
    left: 45%;
    top: -5rem;
    z-index: -1;
  }
  .img-style {
    width: 70%;
    height: 80%;
  }

  .shop-button {
    background-color: #1f5156;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 15rem 0;
    
    .row {
      flex-direction: column-reverse;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 40%;
      top: -4rem;
      background-color: #1f5156;
    }
    .shop-button {
      margin-bottom: 7rem;
    }
  }
`;

export default HeroSection;
