import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaDiscord, FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { Button } from './Button';
const Footer = () => {
    return (
        <>
            <Wrapper>
                <section className='contact-short'>
                    <div className='grid grid-two-column'>
                        <div>
                            <h3 className='text-dark'>Lets's Get Started!!</h3>
                            <h3 className='text-dark'>How Can We Help you today</h3>
                        </div>
                        <div>
                            <Button>
                                <NavLink to='/contact'>Get Started</NavLink>
                            </Button>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className='container grid grid-four-column'>
                        <div className='footer-about'>
                            <h3>TechnoKart E-commerce</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, soluta.</p>
                        </div>
                        <div className='footer-subscribe'>
                            <h3>Subscribe us to get latest updates</h3>
                            <form onSubmit={(e)=> e.preventDefault()}>
                                <input type='email' placeholder='your e-mail' />
                                <input type='submit' value='Subscribe' className='btn'/>
                            </form>
                        </div>
                        <div className='footer-social'>
                            <h3>Follow us</h3>
                            <div className='footer-social-icon d-flex gap-3'>
                                <div>
                                    <FaDiscord className='icon fa-3x my-1' />
                                </div>
                                <div>
                                    <FaInstagram className='icon fa-3x my-1' />
                                </div>
                                <div>
                                    <FaFacebookSquare className='icon fa-3x my-1' />
                                </div>
                                <div>
                                    <FaYoutube className='icon fa-3x my-1' />
                                </div>
                            </div>
                        </div>
                        <div className='footer-contact'>
                            <h3>Contact Us:</h3>
                            <h3>+91 0123456789</h3>
                        </div>
                    </div>
                    <div className="footer-bottom--section">
                        <hr/>
                        <div className="container grid grid-two-column">
                            <p>@{new Date().getFullYear()} TechnoKart &copy; All Rights Reserved.</p>
                            <div>
                                <p>PRIVACY POLICY</p>
                                <p>TERMS & CONDITIONS</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 3rem 9rem;
    background:rgb(236 237 239);
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  .btn{
    font-size: small;
    display:flex;
    margin-top: 10px;
    padding: 10px;
    font-weight: bold;
    background-color: #e81c25;
    color: white;
}
  
  input::placeholder{
    font-weight:bold;
  }
  footer {
    padding-top: 14rem;
    background: #081432;
    color:white;
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      input[type='email']{
        height: 55px;
        width: auto;
      }
      input[type='submit']{
        height: 55px;
        width: auto;
      }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    @media screen and (max-width:576px){
        .btn{
            margin-right:80px;
        }
    }
    @media screen and (max-width:768px){
        .btn{
            margin-right:80px;
        }
    }
    @media screen and (max-width:992px){
        .btn{
            margin-right:80px;
        }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;


export default Footer;