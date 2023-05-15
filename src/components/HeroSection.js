import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

const HeroSection = ({ mydata }) => {
  const { name } = mydata;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h2> {name} </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore fugiat natus architecto laborum dignissimos earum ex commodi corporis in unde, eos magnam sint vitae sit voluptas ea, error est eveniet perferendis minima, doloribus culpa!
            </p>
            <NavLink to='/products'>
              <Button>Shop Now</Button>
            </NavLink>
          </div>
         
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 1rem 0;
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

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 90%;
    height: auto;
  }


    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
    }
  }
`;

export default HeroSection;