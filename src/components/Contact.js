import React, { useState } from 'react'
import styled from 'styled-components';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }
  const [verified, setVerified] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true)
  }
  
  return (
    <Wrapper>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29919286433!2d72.41492738006615!3d23.020158081695595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1682496750383!5m2!1sen!2sin" width="90%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action='https://formspree.io/f/xknakeoa' method='POST' className='contact-inputs'>
            <input type='text' placeholder='Enter your Username' name='username' autoComplete='off' required />
            <input type='email' placeholder='Enter your Email' name='Email' autoComplete='off' required />
            <textarea name='Message' cols="30" rows="7" placeholder='Enter your Message' autoComplete='off' required></textarea>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
            <input type='submit' value='Send' className='btn' disabled={!verified} />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 1rem 0 1rem 0;
    text-align: center;
    .btn{
        background:#6254f3;
        color:#fff;
    }
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;